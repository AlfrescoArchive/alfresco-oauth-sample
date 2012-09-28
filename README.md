This is a Sample [Alfresco](http://www.alfresco.com/) OAuth Application demonstrating the server-side web application flow

Getting started
===============

Follow these instructions:

* Ensure you have an up to date Java VM installed and port 8181 is not in use
* Edit src/main/webapp/config.js and put in the client_id, client_secret and callback urls you used when you registered at [The Alfresco Developer Portal](https://developer.alfresco.com/) (For this app, the redirect_uri should be http://localhost:8181/oauthsample/mycallback.html)
* type: gradlew jettyRun
* In a web browser go to http://localhost:8181/oauthsample

*Note: You don't need to install any other software (only a Java VM and web browser is required).*

# License
Copyright (C) 2012 Alfresco Software Limited

This file is part of an unsupported extension to Alfresco.

Alfresco Software Limited licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
