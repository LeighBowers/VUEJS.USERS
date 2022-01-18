const click = Vue.createApp({
    data() {
        return {
            users: [
                {

                    name: "Jeffrey Hart",
                    username: "jhart0",

                },
                {

                    name: "Cynthia Fields",
                    username: "cfields1",

                },
                {

                    name: "Philip Hunter",
                    username: "phunter2",
                },
                {

                    name: "Margaret Myers",
                    username: "mmyers3",
                },
                {

                    name: "Paula Grant",
                    username: "pgrant4",
                }
            ]
        }
    },
})

click.mount("#apple")
