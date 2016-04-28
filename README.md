# ember-arcgis-addon-starter

This is a starter for building an Ember addon for the ArcGIS environment. It is pre-configured with:
- bootstrap css and basic homepage
- dummy app that uses `torii-provider-arcgis` against www.arcgis.com
- `ember-cli-release` to streamline... releases
- `ember-cli-github-pages` which makes it easy to publish your Dummy (test) app to GH Pages. Follow [instructions a this addon's repo](https://github.com/poetic/ember-cli-github-pages) to get this working


## Usage

Suppose you are creating a "cool-addon", create a folder
*Note:* you need to swap "cool-addon" with the name of your addon.

```
$ mkdir ember-arcgis-cool-addon
```

Then [download](https://github.com/dbouwman/ember-arcgis-addon-starter/archive/master.zip) and un-zip it into that folder.

Now open that folder in an editor and make the following changes:

in `package.json`,
- change the name of the project to `ember-arcgis-cool-addon`
- put your name & email in the author field

in `bower.json`
- change the name to `ember-arcgis-cool-addon`

From there, you will need to update `tests/dummy/app/templates/application.hbs` and `tests/dummy/app/templates/index.hbs` to have content and links etc relevant to your addon.
