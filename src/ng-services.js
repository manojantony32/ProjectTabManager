/*
Copyright 2012 Eiji Kitamura

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Author: Eiji Kitamura (agektmr@gmail.com)
*/
'use strict';

app.factory('Background', function() {
  return {
    // Create folder and add all tabs in specified window there
    createProject: function(title, callback) {
      chrome.runtime.sendMessage({
        command: 'createProject',
        title: title
      }, callback);
    },
    // Remove specified project folder
    removeProject: function(projectId, callback) {
      chrome.runtime.sendMessage({
        command: 'removeProject',
        projectId: projectId
      }, callback);
    },
    // Get folders of projects
    update: function(force_reload, callback) {
      chrome.runtime.sendMessage({
        command: 'update',
        forceReload: force_reload
      }, callback);
    }
  };
});