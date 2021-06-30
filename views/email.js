const txInformHtml = (network, msg) => `
<html>
<head>
</head>
<body>
<h1>ETH Transaction alert</h1>
<br>
<h1>NETWORK</h1>
<h2>${msg}</h2>
</body>
</html>
`;

module.exports = {
  txInformHtml,
};
