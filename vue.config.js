module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
          @import "@/scss/_variables.scss";
        `
            }
        }
    },

    publicPath: './',
    outputDir: 'dist/acct',

};
