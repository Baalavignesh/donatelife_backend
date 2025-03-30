// Sample user data for development and testing
// Centered around Charlottesville, VA (Latitude: 38.0321, Longitude: -78.5104)

const sampleUsers = [
  {
    username: "johnjohnson532@gmail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.6224, 38.1109]
    },
    bloodGroup: "A+",
    phoneNumber: "5438294610"
  },
  {
    username: "emmaanderson215@yahoo.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.3892, 38.0427]
    },
    bloodGroup: "O-",
    phoneNumber: "1029384756"
  },
  {
    username: "davidbrown103@hotmail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.5683, 37.9245]
    },
    bloodGroup: "B+",
    phoneNumber: "7028394561"
  },
  {
    username: "sarahdavis384@icloud.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.4212, 38.1532]
    },
    bloodGroup: "AB+",
    phoneNumber: "3026471958"
  },
  {
    username: "michaelgarcia921@gmail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.6891, 38.0683]
    },
    bloodGroup: "A-",
    phoneNumber: "9017382645"
  },
  {
    username: "lisawilson472@outlook.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.4783, 37.8967]
    },
    bloodGroup: "O+",
    phoneNumber: "8023657194"
  },
  {
    username: "robertmiller529@mail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.3215, 38.0128]
    },
    bloodGroup: "B-",
    phoneNumber: "6012837495"
  },
  {
    username: "marymartinez193@yahoo.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.5912, 38.2104]
    },
    bloodGroup: "AB-",
    phoneNumber: "4029871365"
  },
  {
    username: "danielsmith842@gmail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.7023, 37.9812]
    },
    bloodGroup: "A+",
    phoneNumber: "5031926784"
  },
  {
    username: "emilyrodriguez319@hotmail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.4321, 38.0735]
    },
    bloodGroup: "O+",
    phoneNumber: "2035917846"
  },
  {
    username: "alexbrown671@outlook.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.5683, 38.1438]
    },
    bloodGroup: "B+",
    phoneNumber: "7014293856"
  },
  {
    username: "janewilliams428@icloud.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.6124, 37.9532]
    },
    bloodGroup: "AB+",
    phoneNumber: "9028347615"
  },
  {
    username: "johnjones527@mail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.3724, 38.0921]
    },
    bloodGroup: "A-",
    phoneNumber: "3019287456"
  },
  {
    username: "sarahmiller156@gmail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.5432, 37.8723]
    },
    bloodGroup: "O-",
    phoneNumber: "8024619375"
  },
  {
    username: "davidgarcia294@yahoo.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.7214, 38.1156]
    },
    bloodGroup: "B-",
    phoneNumber: "1029384756"
  },
  {
    username: "laurenjohnson642@gmail.com",
    password: "password123",
    location: {
      type: "Point", 
      coordinates: [-78.4892, 38.1723]
    },
    bloodGroup: "A+",
    phoneNumber: "7023948125"
  },
  {
    username: "thomasbrown159@outlook.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.6542, 37.9675]
    },
    bloodGroup: "O+",
    phoneNumber: "3019582647"
  },
  {
    username: "jennifersmith384@yahoo.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.3961, 38.0832]
    },
    bloodGroup: "AB-",
    phoneNumber: "9012873465"
  },
  {
    username: "williamdavis219@hotmail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.5321, 38.1287]
    },
    bloodGroup: "B+",
    phoneNumber: "4019287345"
  },
  {
    username: "amandamiller576@gmail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.4163, 37.9986]
    },
    bloodGroup: "A-",
    phoneNumber: "6012395847"
  },
  {
    username: "kevinwilson814@icloud.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.6813, 38.0528]
    },
    bloodGroup: "O-",
    phoneNumber: "8019283746"
  },
  {
    username: "rachelgarcia392@mail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.4526, 38.1976]
    },
    bloodGroup: "B-",
    phoneNumber: "7014293856"
  },
  {
    username: "josephrodriguez741@yahoo.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.5891, 37.8812]
    },
    bloodGroup: "AB+",
    phoneNumber: "2013948576"
  },
  {
    username: "nataliejones283@gmail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.3352, 38.0391]
    },
    bloodGroup: "A+",
    phoneNumber: "5018293746"
  },
  {
    username: "christopherwilliams629@hotmail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.6732, 38.1184]
    },
    bloodGroup: "O+",
    phoneNumber: "9023841756"
  },
  {
    username: "ashleybrown495@outlook.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.4037, 37.9365]
    },
    bloodGroup: "B+",
    phoneNumber: "3026149857"
  },
  {
    username: "brandonsmith718@mail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.5634, 38.0873]
    },
    bloodGroup: "AB-",
    phoneNumber: "4019283756"
  },
  {
    username: "stephaniemartinez365@gmail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.4389, 37.9753]
    },
    bloodGroup: "A-",
    phoneNumber: "8012934765"
  },
  {
    username: "andrewdavis582@icloud.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.6183, 38.1537]
    },
    bloodGroup: "O-",
    phoneNumber: "7019283645"
  },
  {
    username: "erinmiller247@yahoo.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.3742, 38.0623]
    },
    bloodGroup: "B-",
    phoneNumber: "6013925847"
  },
  {
    username: "jasonwilson631@hotmail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.5942, 37.9243]
    },
    bloodGroup: "AB+",
    phoneNumber: "3012945768"
  },
  {
    username: "samanthagarcia124@gmail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.4512, 38.1046]
    },
    bloodGroup: "A+",
    phoneNumber: "9014293685"
  },
  {
    username: "ryanjohnson479@outlook.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.6342, 38.0194]
    },
    bloodGroup: "O+",
    phoneNumber: "4015928376"
  },
  {
    username: "melissaanderson836@mail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.3892, 37.9534]
    },
    bloodGroup: "B+",
    phoneNumber: "8019473625"
  },
  {
    username: "justinbrown192@yahoo.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.5124, 38.1364]
    },
    bloodGroup: "AB-",
    phoneNumber: "2013948567"
  },
  {
    username: "katherinewilliams347@gmail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.4632, 38.0212]
    },
    bloodGroup: "A-",
    phoneNumber: "5019283465"
  },
  {
    username: "stevenmiller928@icloud.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.6723, 37.9814]
    },
    bloodGroup: "O-",
    phoneNumber: "7013948256"
  },
  {
    username: "rebeccarodriguez614@hotmail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.3451, 38.0741]
    },
    bloodGroup: "B-",
    phoneNumber: "3016429857"
  },
  {
    username: "ericsmith531@gmail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.5731, 38.1492]
    },
    bloodGroup: "AB+",
    phoneNumber: "9012473856"
  },
  {
    username: "nicoledavis382@outlook.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.4278, 37.9142]
    },
    bloodGroup: "A+",
    phoneNumber: "6014293875"
  },
  {
    username: "timothygarcia749@yahoo.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.6431, 38.0327]
    },
    bloodGroup: "O+",
    phoneNumber: "8017293456"
  },
  {
    username: "shannonmartinez216@mail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.3671, 38.1128]
    },
    bloodGroup: "B+",
    phoneNumber: "4012973856"
  },
  {
    username: "matthewjones463@gmail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.5342, 37.9634]
    },
    bloodGroup: "AB-",
    phoneNumber: "3019472836"
  },
  {
    username: "sarawilson189@hotmail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.4567, 38.0852]
    },
    bloodGroup: "A-",
    phoneNumber: "7014382956"
  },
  {
    username: "daniellewilliams725@icloud.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.6143, 38.1732]
    },
    bloodGroup: "O-",
    phoneNumber: "9013472856"
  },
  {
    username: "markbrown361@yahoo.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.3921, 38.0123]
    },
    bloodGroup: "B-",
    phoneNumber: "6018293745"
  },
  {
    username: "christinasmith528@gmail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.5824, 37.9321]
    },
    bloodGroup: "AB+",
    phoneNumber: "2013948576"
  },
  {
    username: "gregorydavis637@outlook.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.4124, 38.1634]
    },
    bloodGroup: "A+",
    phoneNumber: "8017293645"
  },
  {
    username: "tiffanymiller291@mail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.6532, 38.0421]
    },
    bloodGroup: "O+",
    phoneNumber: "5018293746"
  },
  {
    username: "patrickgarcia426@hotmail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.3764, 37.9741]
    },
    bloodGroup: "B+",
    phoneNumber: "3019273846"
  },
  {
    username: "vanessarodriguez853@gmail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.5423, 38.0964]
    },
    bloodGroup: "AB-",
    phoneNumber: "9018394726"
  },
  {
    username: "jeremyjones574@icloud.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.4671, 37.9435]
    },
    bloodGroup: "A-",
    phoneNumber: "7019283645"
  },
  {
    username: "angelawilson382@yahoo.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.6256, 38.1827]
    },
    bloodGroup: "O-",
    phoneNumber: "4015928376"
  },
  {
    username: "aaronwilliams619@outlook.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.3541, 38.0542]
    },
    bloodGroup: "B-",
    phoneNumber: "8019273645"
  },
  {
    username: "megansmith428@gmail.com",
    password: "password123",
    location: {
      type: "Point",
      coordinates: [-78.5964, 37.9123]
    },
    bloodGroup: "AB+",
    phoneNumber: "6018294735"
  }
];

module.exports = sampleUsers; 