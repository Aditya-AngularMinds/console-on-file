module.exports = {
    setConsoleOnFire: () => {
        let totalFire = ''
        console.log('Press Ctrl + C to stop fire anytime')
        setInterval(() => {
            totalFire = totalFire + `\u{1F525} `;
            console.log(totalFire);
        }, 1000)
    }
}
