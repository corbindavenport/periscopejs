PeriscopeJS
================
PeriscopeJS is a JavaScript library designed to interact with [Periscope](https://www.periscope.tv/). Periscope just so happens to leave a large amount of information about users and broadcasts public, so PeriscopeJS is designed to access that information.

How to use
----------------
PeriscopeJS is really easy to use. Just link the script in the header of any web page like this:

`<script src="periscope.js"></script>`

It doesn't need any external libraries like JQuery.

PeriscopeJS has two functions available: PerJS.getUserInformation and PerJS.getBroadcastInformation. You can use PerJS.getUserInformation to retrieve information about a user profile, and PerJS.getBroadcastInformation to retrieve information about a broadcast (live or ended).

For example, to retrieve the display name of a user, you do this:

`PerJS.getUserInformation('corbindavenport', 'display_name')`

The first parameter is the username, and the second is the property you are requesting. This is true for both functions.

Here is the available calls for PerJS.getUserInformation:

| Property            | Description                                                                | Example                             |
|---------------------|----------------------------------------------------------------------------|-------------------------------------|
| created_at          | The date and time the Periscope account was created                        | 2015-05-26T07:38:00.479598585-07:00 |
| description         | The profile biography                                                      | 17 year-old web developer.          |
| display_name        | The full name of the user                                                  | Corbin Davenport                    |
| id                  | The user's account ID                                                      | 2991854                             |
| is_beta_user        | The status of the Periscope user being a beta user, returns a boolean      | false                               |
| is_employee         | The status of the user being a Twitter employee, returns a boolean         | false                               |
| is_twitter_verified | The status of the user being a verified user by Twitter, returns a boolean | false                               |
| n_followers         | The number of followers the account has, returns a number                  | 76                                  |
| n_following         | The number of other users the user is following, returns a number          | 21                                  |
| n_hearts            | The number of hearts the user has recieved, returns a number               | 392                                 |
| profile_image_urls  | Array of the user's header and avatar images                               | N/A                                 |
| twitter_screen_name | Twitter username of the Periscope account                                  | corbindavenport                     |
| updated_at          | The last time the profile was updated                                      | 2016-01-23T12:47:14.596946487-08:00 |

And here are the available calls for PerJS.getBroadcastInformation:

| Property             | Description                                                        | Example                             |
|----------------------|--------------------------------------------------------------------|-------------------------------------|
| available_for_replay | If the broadcast is available for replay, returns a boolean        | false                               |
| city                 | The city the broadcast was recorded at                             | London                              |
| country              | The country the broadcast was recorded at                          | United Kingdom                      |
| country_state        | The state the broadcast was recoded at                             | England                             |
| created_at           | Date and time the broadcast was created                            | 2016-01-23T12:48:20.028120057-08:00 |
| featured             | If the broadcast has been featured by Periscope, returns a boolean | false                               |
| friend_chat          | If the broadcast chat is limited to friends of the broadcaster     | false                               |
| has_location         | If the broadcast has a location specified                          | true                                |
| height               | Height of the raw broadcast video                                  | 568                                 |
| width                | Width of the raw broadcast video                                   | 320                                 |
| id                   | ID of the broadcast, used in the URL                               | 1MnxnAOwYmwJO                       |
| image_url            | Preview image for broadcast, in JPG format                         | N/A                                 |
| image_url_small      | Smaller preview image for the broadcast, in JPG format             | N/A                                 |
| ip_lat               | Latitude location of the broadcast                                 | 51.529                              |
| ip_lng               | Longitude location of the broadcast                                | 0.049                               |
| is_locked            | ?                                                                  | false                               |
| iso_code             | ISO code of the broadcast                                          | GB                                  |
| language             | Language of the broadcast                                          | en                                  |
| ping                 | Last time and date the broadcast was pinged                        | 2016-01-23T12:49:39.005946084-08:00 |
| profile_image_url    | The profile image of the user, in JPG format                       | N/A                                 |
| start                | The time and date the broadcast started                            | 2016-01-23T12:49:07.477777981-08:00 |
| state                | The current state of the broadcast                                 | RUNNING                             |
| twitter_username     | The Twitter username of the user                                   | corbindavenport                     |
| updated_at           | The time and date the user profile was last updated                | 2016-01-23T12:49:39.005946084-08:00 |
| user_display_name    | The display name of the user                                       | Corbin Davenport                    |
|                      |                                                                    |                                     |
|                      |                                                                    |                                     |

---------------------------------------------------------

__New in PeriscopeJS 1.1:__
* Greatly improved code
* Improved minified version

__New in PeriscopeJS 1.0:__
* Initial release!

---------------------------------------------------------

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
