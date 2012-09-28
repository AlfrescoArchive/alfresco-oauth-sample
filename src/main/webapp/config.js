/* Use the values from your account on the Alfresco Developer Portal (developer.alfresco.com)
 * 
 * Set client_id to the value of "Api Key" (on the "Auth" tab when you edit an application in the portal)
 * Set client_secret to the value of "Key Secret" (on the "Auth" tab when you edit an application in the portal)
 * For this app to work, the redirect_uri should be set to "http://localhost:8181/oauthsample/mycallback.html"
 * (The redirect_uri MUST match the value you set as the "Callback URL" on the "Auth" tab in the portal)
 */
var config = {
  client_id:"your_api_key",
  client_secret:"your_key_secret",
  redirect_uri:"your_callback_url",
  authURL:"https://api.alfresco.com/auth/oauth/versions/2/authorize",
  tokenURL:"https://api.alfresco.com/auth/oauth/versions/2/token",
  scope:"public_api",
  aTestUrl:"https://api.alfresco.com/alfresco.com/public/alfresco/versions/1/sites"
};
