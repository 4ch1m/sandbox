# Thunderbird Add-Ons - Using images in options-tab breaks copy/paste funtionality in ALL text-fields
> Tested with a fresh install of Thunderbird 78.5.0

=> [Bugzilla](https://bugzilla.mozilla.org/show_bug.cgi?id=1678057)

I know, the description sounds weird... but it's easy to reproduce. :-D

Just a simple manifest [manifest.json](manifest) with a **dedicated options-page**:
```
{
  "manifest_version": 2,
  "name": "optionstest",
  "description": "options test",
  "version": "1.0.0",
  "options_ui": {
    "open_in_tab": true,
    "page": "options.html"
  }
}
```

The options-page itself contains a simple text-input field **AND** a simple image-reference:
```
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Options Test</title>
    </head>
    <body>
    	<h1>Options Test</h1>
    	<input type="text">
    	<img src="mozilla-dino.png" alt="mozilla-dino">
    </body>
</html>
```

Try it yourself:

1. (temporarily) load this add-on in Thunderbird
1. open the options-page of the add-on
1. you'll now see the input-field and the image
1. now enter a few characters in the field
1. finally, try to mark/copy the text characters you just entered and paste it in the same field
1. **it doesn't work**

---

Now modify the [options.html](options.html) and remove the image:
```
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Options Test</title>
    </head>
    <body>
    	<h1>Options Test</h1>
    	<input type="text">
    </body>
</html>
```

1. reload the add-on
2. again... open the options-dialog
3. again... type some text in to the input field
4. now try to mark/copy/paste the text into that field again
5. **it works as expected**

Hope this can be fixed soon.
Thanks!
