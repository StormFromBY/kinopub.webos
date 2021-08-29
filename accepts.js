require("isomorphic-fetch");

(() => {
  const intervalId = setInterval(async () => {
    const acceptResponse = await fetch(
      "https://testflight.apple.com/v3/accounts/f29d4e21-590b-4a81-b35d-4702217da911/ru/cOVQ6STh/accept",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Active-Devices":
            "Oasis/3.1.0 WatchOS/7.6.1 model/Watch4,2 build/18U70 idh/4124357dfef9e1b0f3ae72aff92a51b17842c87a",
          "X-Apple-Ta-Device": "iPhone10,3 iPhone9,2",
          "X-Request-Id": "3F803A24-9F71-4375-A6EA-908F37CC2EE9",
          "X-Session-Digest": "b900a070125834770d28986b2eaa4a377968bc6d",
          "X-Session-Id": "CPyqDBIQghuspZENSmqEIzCSyL73qw==",
        },
        method: "POST",
      }
    );

    if (acceptResponse.ok) {
      console.log("Accepted!!!");
      clearInterval(intervalId);
    } else if (acceptResponse.status !== 409) {
      console.error(
        "Wrong status, need check",
        acceptResponse.status,
        acceptResponse.statusText
      );
      clearInterval(intervalId);
    } else {
      console.log("Failed to accept, retry in 30 seconds");
    }
  }, 30 * 1000);
})();
