import * as React from "react";
import WebViewer from "@pdftron/webviewer";
import { useRef } from "react";

export const App = () => {
  const viewerRef = useRef(null);
  const intervalRef = useRef(1);
  const firstRun = useRef(true);

  let test1 =
    "https://customer-files-w.s3.amazonaws.com/org.eba98b82-1e45-4987-a790-edf90f2cfa59/GFy-E_1JwAEARNq_-pJ1X/Appropriations_Bill.pdf?AWSAccessKeyId=AKIAZCNKTIAMGCORWAMI&Signature=CKmT9jLqt11KfeJo%2Bt5HvJJUd%2BA%3D&Expires=1703794234";
  let test2 =
    "https://customer-files-w.s3.amazonaws.com/org.eba98b82-1e45-4987-a790-edf90f2cfa59/GFy-E_1JwAEARNq_-pJ1X/pkpadmin52927111CE.pdf?AWSAccessKeyId=AKIAZCNKTIAMGCORWAMI&Signature=etRpBSRM712Vv72GPLeyZFZVeOk%3D&Expires=1703794234";

  // initial
  React.useLayoutEffect(() => {
    console.log("Running useLayoutEffect, first run?", firstRun.current);
    if (!firstRun.current) return;
    firstRun.current = false;
    console.log("Webviewer: ", WebViewer);
    initializeViewer();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const startTests = (instance) => {
    console.log(
      "**************** ----------> PDFTRON VIEWER TESTS <------------ ***************"
    );
    let timePassed = 0;
    let timeInterval = 1;
    intervalRef.current = window.setInterval(() => {
      timePassed += timeInterval;
      console.log("timePassed: ", timePassed);
      let nextDoc = timePassed % (2 * timeInterval) ? test1 : test2;

      instance.Core.documentViewer.closeDocument();
      instance.Core.documentViewer.dispose();
      instance.UI.loadDocument(nextDoc, {});
    }, timeInterval * 1000);
  };

  const initializeViewer = async () => {
    console.log(
      "**************** ----------> PDFTRON VIEWER SETUP <------------ ***************"
    );
    const getFilesPath = () => {
      let path = `${window.location.origin}/webviewer`;
      // console.log("Webviewer PATH: ", path);
      return path;
    };

    let options = {
      css: `${getFilesPath()}/pdftron-style-override.CSS`,
      path: getFilesPath(),
      useDownloader: true,
      enableOptimizedWorkers: true,
    };

    // IE11 seems to like the "then" vs setting instance with the resolved promise here.

    console.log("viewerRef: ", viewerRef.current);
    console.log("options: ", options);

    await WebViewer(options, viewerRef.current)
      .then((instance) => {
        console.log("Start TESTS");
        console.log("");
        instance.UI.loadDocument(test1, {});
        intervalRef.current = startTests(instance);
      })
      .catch((e) => {
        window["pdfLoadError"] = e;
        alert(e);
      });
  };

  return (
    <>
      <div ref={viewerRef} style={{ height: "400px", width: "300px" }}></div>
    </>
  );
};

export default App;
