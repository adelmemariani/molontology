const initRDKit = (() => {
  let rdkitLoadingPromise;

  return () => {

    if (!rdkitLoadingPromise) {

      rdkitLoadingPromise = new Promise((resolve, reject) => {
        window
          .initRDKitModule()
          .then((RDKit) => {
            console.log("RDKit version: " + RDKit.version());
            window.RDKit = RDKit;
            resolve();
          })
          .catch((e) => {
            console.log('###########');

            reject();
          });
      });
    }

    return rdkitLoadingPromise;
  };
})();

export default initRDKit;
