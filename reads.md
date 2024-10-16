https://nerdcave.com/tailwind-cheat-sheet

04/09/2024
https://www.smashingmagazine.com/2020/01/introduction-react-context-api/

25/09/2024
https://medium.com/@mvsg/buffers-in-node-js-what-they-are-and-why-they-matter-610b34b98915#:~:text=Simply%20put%2C%20a%20Buffer%20is,raw%20data%20from%20a%20network.

11/10/2024
https://mongoosejs.com/docs/queries.html

2. Payload
The payload contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims:

Registered claims: Predefined claims which are not mandatory but recommended, e.g., iss (issuer), exp (expiration time), sub (subject), aud (audience).
Public claims: Custom claims created to share information, e.g., name, role.
Private claims: Custom claims agreed upon between parties, e.g., user_id.
Example payload:

{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true,
  "iat": 1516239022
}

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c