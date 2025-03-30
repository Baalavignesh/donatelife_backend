// Array of users with locations around UVA Charlottesville area
const users = [
  {
    username: "alex_johnson",
    password: "1234",
    bloodGroup: "A+",
    location: {
      lat: 38.0370944,
      long: -78.5088512
    },
    phoneNumber: "1231231231"
  },
  {
    username: "taylor_smith",
    password: "1234",
    bloodGroup: "O-",
    location: {
      lat: 38.0335,
      long: -78.5124
    },
    phoneNumber: "2342342342"
  },
  {
    username: "jordan_williams",
    password: "1234",
    bloodGroup: "B+",
    location: {
      lat: 38.0298,
      long: -78.5079
    },
    phoneNumber: "3453453453"
  },
  {
    username: "casey_brown",
    password: "1234",
    bloodGroup: "AB+",
    location: {
      lat: 38.0356,
      long: -78.5033
    },
    phoneNumber: "4564564564"
  },
  {
    username: "morgan_davis",
    password: "1234",
    bloodGroup: "A-",
    location: {
      lat: 38.0287,
      long: -78.5118
    },
    phoneNumber: "5675675675"
  },
  {
    username: "riley_miller",
    password: "1234",
    bloodGroup: "O+",
    location: {
      lat: 38.0342,
      long: -78.5167
    },
    phoneNumber: "6786786786"
  },
  {
    username: "avery_wilson",
    password: "1234",
    bloodGroup: "B-",
    location: {
      lat: 38.0401,
      long: -78.5094
    },
    phoneNumber: "7897897897"
  },
  {
    username: "quinn_moore",
    password: "1234",
    bloodGroup: "AB-",
    location: {
      lat: 38.0315,
      long: -78.5052
    },
    phoneNumber: "8908908908"
  },
  {
    username: "bailey_jackson",
    password: "1234",
    bloodGroup: "A+",
    location: {
      lat: 38.0278,
      long: -78.5101
    },
    phoneNumber: "9019019019"
  },
  {
    username: "reese_thompson",
    password: "1234",
    bloodGroup: "O+",
    location: {
      lat: 38.0369,
      long: -78.5132
    },
    phoneNumber: "1122334455"
  },
  {
    username: "skyler_white",
    password: "1234",
    bloodGroup: "B+",
    location: {
      lat: 38.0329,
      long: -78.5181
    },
    phoneNumber: "2233445566"
  },
  {
    username: "harper_harris",
    password: "1234",
    bloodGroup: "A-",
    location: {
      lat: 38.0392,
      long: -78.5066
    },
    phoneNumber: "3344556677"
  },
  {
    username: "emerson_clark",
    password: "1234",
    bloodGroup: "AB+",
    location: {
      lat: 38.0348,
      long: -78.5027
    },
    phoneNumber: "4455667788"
  },
  {
    username: "charlie_lewis",
    password: "1234",
    bloodGroup: "O-",
    location: {
      lat: 38.0305,
      long: -78.5148
    },
    phoneNumber: "5566778899"
  },
  {
    username: "dakota_walker",
    password: "1234",
    bloodGroup: "B-",
    location: {
      lat: 38.0267,
      long: -78.5073
    },
    phoneNumber: "6677889900"
  },
  {
    username: "finley_hall",
    password: "1234",
    bloodGroup: "A+",
    location: {
      lat: 38.0376,
      long: -78.5159
    },
    phoneNumber: "7788990011"
  },
  {
    username: "addison_young",
    password: "1234",
    bloodGroup: "O+",
    location: {
      lat: 38.0412,
      long: -78.5111
    },
    phoneNumber: "8899001122"
  },
  {
    username: "peyton_king",
    password: "1234",
    bloodGroup: "AB-",
    location: {
      lat: 38.0281,
      long: -78.5044
    },
    phoneNumber: "9900112233"
  },
  {
    username: "sawyer_wright",
    password: "1234",
    bloodGroup: "B+",
    location: {
      lat: 38.0354,
      long: -78.5198
    },
    phoneNumber: "1212121212"
  },
  {
    username: "cameron_lopez",
    password: "1234",
    bloodGroup: "A-",
    location: {
      lat: 38.0251,
      long: -78.5087
    },
    phoneNumber: "2323232323"
  },
  {
    username: "blake_hill",
    password: "1234",
    bloodGroup: "O-",
    location: {
      lat: 38.0398,
      long: -78.5038
    },
    phoneNumber: "3434343434"
  },
  {
    username: "hayden_scott",
    password: "1234",
    bloodGroup: "AB+",
    location: {
      lat: 38.0321,
      long: -78.5104
    },
    phoneNumber: "4545454545"
  },
  {
    username: "rowan_green",
    password: "1234",
    bloodGroup: "B-",
    location: {
      lat: 38.0362,
      long: -78.5172
    },
    phoneNumber: "5656565656"
  },
  {
    username: "parker_adams",
    password: "1234",
    bloodGroup: "A+",
    location: {
      lat: 38.0427,
      long: -78.5099
    },
    phoneNumber: "6767676767"
  },
  {
    username: "phoenix_nelson",
    password: "1234",
    bloodGroup: "O+",
    location: {
      lat: 38.0294,
      long: -78.5031
    },
    phoneNumber: "7878787878"
  },
  {
    username: "elliott_carter",
    password: "1234",
    bloodGroup: "B+",
    location: {
      lat: 38.0341,
      long: -78.5213
    },
    phoneNumber: "8989898989"
  },
  {
    username: "tyler_mitchell",
    password: "1234",
    bloodGroup: "AB-",
    location: {
      lat: 38.0241,
      long: -78.5119
    },
    phoneNumber: "9090909090"
  },
  {
    username: "rory_perez",
    password: "1234",
    bloodGroup: "A-",
    location: {
      lat: 38.0388,
      long: -78.5015
    },
    phoneNumber: "1020304050"
  },
  {
    username: "sage_roberts",
    password: "1234",
    bloodGroup: "O-",
    location: {
      lat: 38.0315,
      long: -78.5229
    },
    phoneNumber: "2030405060"
  },
  {
    username: "ellis_turner",
    password: "1234",
    bloodGroup: "B-",
    location: {
      lat: 38.0232,
      long: -78.5091
    },
    phoneNumber: "3040506070"
  },
  {
    username: "parker_phillips",
    password: "1234",
    bloodGroup: "AB+",
    location: {
      lat: 38.0379,
      long: -78.4998
    },
    phoneNumber: "4050607080"
  },
  {
    username: "jordan_campbell",
    password: "1234",
    bloodGroup: "A+",
    location: {
      lat: 38.0337,
      long: -78.5246
    },
    phoneNumber: "5060708090"
  },
  {
    username: "drew_parker",
    password: "1234",
    bloodGroup: "O+",
    location: {
      lat: 38.0221,
      long: -78.5076
    },
    phoneNumber: "6070809010"
  },
  {
    username: "london_evans",
    password: "1234",
    bloodGroup: "B+",
    location: {
      lat: 38.0371,
      long: -78.4985
    },
    phoneNumber: "7080901020"
  },
  {
    username: "ryan_edwards",
    password: "1234",
    bloodGroup: "AB-",
    location: {
      lat: 38.0359,
      long: -78.5262
    },
    phoneNumber: "8090102030"
  },
  {
    username: "mackenzie_collins",
    password: "1234",
    bloodGroup: "A-",
    location: {
      lat: 38.0211,
      long: -78.5109
    },
    phoneNumber: "9010203040"
  },
  {
    username: "kai_stewart",
    password: "1234",
    bloodGroup: "O-",
    location: {
      lat: 38.0417,
      long: -78.5137
    },
    phoneNumber: "1231231232"
  },
  {
    username: "river_sanchez",
    password: "1234",
    bloodGroup: "B-",
    location: {
      lat: 38.0425,
      long: -78.5071
    },
    phoneNumber: "2342342343"
  },
  {
    username: "jamie_morris",
    password: "1234",
    bloodGroup: "AB+",
    location: {
      lat: 38.0384,
      long: -78.5222
    },
    phoneNumber: "3453453454"
  },
  {
    username: "scout_rogers",
    password: "1234",
    bloodGroup: "A+",
    location: {
      lat: 38.0256,
      long: -78.5133
    },
    phoneNumber: "4564564565"
  },
  {
    username: "alex_reed",
    password: "1234",
    bloodGroup: "O+",
    location: {
      lat: 38.0438,
      long: -78.5058
    },
    phoneNumber: "5675675676"
  },
  {
    username: "kendall_cook",
    password: "1234",
    bloodGroup: "B+",
    location: {
      lat: 38.0303,
      long: -78.5238
    },
    phoneNumber: "6786786787"
  },
  {
    username: "robin_morgan",
    password: "1234",
    bloodGroup: "AB-",
    location: {
      lat: 38.0274,
      long: -78.5159
    },
    phoneNumber: "7897897898"
  },
  {
    username: "taylor_bell",
    password: "1234",
    bloodGroup: "A-",
    location: {
      lat: 38.0451,
      long: -78.5121
    },
    phoneNumber: "8908908909"
  },
  {
    username: "casey_murphy",
    password: "1234",
    bloodGroup: "O-",
    location: {
      lat: 38.0321,
      long: -78.5274
    },
    phoneNumber: "9019019020"
  },
  {
    username: "jordan_bailey",
    password: "1234",
    bloodGroup: "B-",
    location: {
      lat: 38.0464,
      long: -78.5084
    },
    phoneNumber: "1122334456"
  },
  {
    username: "riley_rivera",
    password: "1234",
    bloodGroup: "AB+",
    location: {
      lat: 38.0267,
      long: -78.5187
    },
    phoneNumber: "2233445567"
  },
  {
    username: "ash_cooper",
    password: "1234",
    bloodGroup: "A+",
    location: {
      lat: 38.0432,
      long: -78.5153
    },
    phoneNumber: "3344556678"
  }
];

module.exports = users;
