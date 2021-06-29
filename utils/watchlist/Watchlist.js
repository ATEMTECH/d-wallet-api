class Watchlist {
  static watchlistsToEmails = (watchlists) => {
    const emails = [];
    watchlists.find((o, i) => {
      emails.push(o.callbackEmail);
    });
    return emails;
  };

  static watchlistsToCallbackUrls = (watchlists) => {
    const callbackUrls = [];
    watchlists.find((o, i) => {
      callbackUrls.push(o.callbackUrl);
    });
    return callbackUrls;
  };
}

module.exports = {
  Watchlist,
};
