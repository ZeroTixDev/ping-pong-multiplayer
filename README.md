## Multiplayer Ping Pong
# The networking of Ping Pong
## Brainstorming
#### The game should respond to inputs immediately (client prediction) regardless of the internet connection quality between the client and the game server. The ball should also be predicted but the server is authoriative of it
### What should happen
- Client presses down a key
- Client applies the input and sends to the server the "tick" that it was pressed on and the input data
- Server receives the input and rewinds back in time to apply the input for the client
- Server hands down the inputs and state to all the participating clients 
- Client gets data from the server but its in the past because there is delay and the client may have applied inputs that the server simply havent received yet so this means that we cant naively reset the game state to the server state that we got (even though the server is authoratitve here)
- Instead, the client goes back in the past to where the server and client are on the same tick and compare if there is a desync (the states aren't the same), if there is, the client rewinds back into that state and reapplies the inputs that didn't reach the server yet in order to catch back up to the present (in this case, the client is in the present and the server is in the past)
- Everyone is happy! No input delay
- But there are still two approaches you can do beyond this, Interpolation or Extrapolation (or both lol), For interpolation, you are purposely adding extra delay to opponents so they look smoother, for extrapolation, you are predicting what the opponent will do.
- Since I want this game to be decently fast-paced, I will extrapolate the state of the game instead of interpolate. If the client is doing nothing, then it is assumed that they are still doing nothing. If they are holding left, then its assumed that they are still holding left the next frame. Im using the last input the client used and using it for future ticks to extrapolate it. However this is not good when they have to extrapolate for more time, the possible error gets bigger. So maybe I will limit how long they can extrapolate.
## My approach
### 