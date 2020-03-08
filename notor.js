const dns = require("dns");
const toronion = [
  "tor",
  "onion",
  "exit",
  "anonymizer",
  "relay",
  "ip-",
  "today",
  "accessnow.org"
];
module.exports = warnmessage => {
  return (req, res, next) => {
    new Promise((res, rej) => {
      dns.reverse(req.connection.remoteAddress, (err, hostnames) => {
        let ok = true;
        if (
          hostnames &&
          hostnames !== undefined &&
          hostnames !== [] &&
          hostnames[0] != null
        ) {
          ok = false;
          let detect = false;
          hostnames.forEach(sz => {
            if (
              sz.includes(toronion[0]) ||
              sz.includes(toronion[1]) ||
              sz.includes(toronion[2]) ||
              sz.includes(toronion[3]) ||
              sz.includes(toronion[4]) ||
              sz.includes(toronion[5]) ||
              sz.includes(toronion[6]) ||
              sz.includes(toronion[7])
            ) {
              rej(true);
              ok = false;
              detect = true;
              res.send(warnmessage);
            }
          });
          if (!detect) {
            ok = true;
          }
        }
        if (ok) {
          res(ok);
        }
      });
    }).then(
      ok => {
        next();
      },
      err => {
        if (err) {
          console.log("Tor");
        }
      }
    );
  };
};
