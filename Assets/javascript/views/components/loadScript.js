let scriptCreate = (scriptName, src, timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let script = createNewElement(["script", null, "head", null, { src: src }])
            script.onload = () => {
                resolve(`${scriptName} loaded successfully`);
            }
            script.onerror = () => {
                reject(`Error while loading ${scriptName}`);
            }
        }, timeout);
    });
}