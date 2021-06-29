const txInformHtml = (network, msg) => `
<html>
<head>
</head>
<body>
ETH Transaction alert<br>
<p>NETWORK</p>
<h2>${msg}</h2>
</body>
</html>
`;

module.exports = {
  txInformHtml,
};
