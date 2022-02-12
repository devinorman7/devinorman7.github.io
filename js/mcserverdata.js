  var mc = new Vue({
    el: '#app',
    data: {
      online: '',
      max: '',
      players: [],
      uuidlist: [],
      version: ''
    },

    computed: {
      age() {
        return moment().diff(this.birthdate, 'years');
      }
    },
    methods: {
      formatDate(d) {
        return moment(d).format("MMMM Do YYYY");
      },

      refresh() {
        axios.get('https://api.mcsrvstat.us/2/flocraft.online')
          .then(function (response) {
            const server = response.data;
            mc.online = server.players.online;
            mc.max = server.players.max;
            mc.players = server.players.list;
            mc.uuidlist = server.players.uuid;
          })
      }

    },
    created() {},

    mounted() {
      axios.get('https://api.minetools.eu/query/98.157.123.97/25555')
        .then(function (response) {
          const server = response.data;
          mc.online = server.Players;
          mc.max = server.MaxPlayers;
          mc.players = server.Playerlist;
          mc.plugins = server.Plugins;
          mc.version = server.Version;
          console.log(response.data)
        })
    }
  });