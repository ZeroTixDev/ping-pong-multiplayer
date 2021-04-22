## Multiplayer Ping Pong
### I wanted to make this game because ping pong is a simple game to do networking experiments on!
# The networking of Ping Pong
## Brainstorming
#### The game should respond to inputs immediately (client prediction) regardless of the internet connection quality between the client and the game server. The ball should also be predicted but the server is authoriative of it
### What should happen
- Client presses down a key
- Client applies the input and sends to the server the "tick" (frame number) that it was pressed on and the input data
- Server receives the input and rewinds back in time to apply the input for the client
- Server hands down the inputs to all the participating clients 
- Client gets the inputs from the server although its in the past because of delay
- The client has to rewind to the past where the receiving input tick was on, and then reapplies inputs all the way to the present tick
- Everyone is happy! No input delay
- However, the quality of your experience is no longer dependent on how good your connection is to the game server, instead it depends on other people's connections
- Also this does not scale well which is why you typically see determisntic lockstep implemented in small room-based games
- But there are still two approaches you can do beyond this, Interpolation or Extrapolation (and both lol), For interpolation, you are purposely adding extra delay to opponents so they look smoother, for extrapolation, you are predicting what the opponent will do.
- Since I want this game to be decently fast-paced, I will extrapolate the state of the game based on the last inputs of the other players. If the client is doing nothing, then it is assumed that they are still doing nothing. If they are holding left, then its assumed that they are still holding left the next frame. Im using the last input we received from that client and using it for future ticks to extrapolate it. I also add some decay in the input to simulate uncertainity because the prediction could be going in the wrong directions and we want to prevent large corrections. However this means that if you hold up, the other player whos watching you will see you slightly behind. (With no decay, they would see you at the same place)
- We can also do some smoothing although its optional. I tried smoothing for a bit and it worked out fine however the collisions feel somewhat janky as the ball changed directions before it hit the paddle. Although I know I can make the smoothing faster or adaptive, it works well enough without smoothing and I want the player to see the actual game state. (subjective)

### This works decently well, the code is free and open source but maybe provide credit if this helped you a lot for your multiplayer game !!