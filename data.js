var APP_DATA = {
  "scenes": [
    {
      "id": "0-main-entrance",
      "name": "Main entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.7523904594500834,
        "pitch": 0.00426735675247869,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": 0.4955797049713073,
          "pitch": 0.48136088963709867,
          "rotation": 0,
          "target": "1-entry"
        },
        {
          "yaw": -0.86355193892215,
          "pitch": 0.14337700427296163,
          "rotation": 0,
          "target": "9-garden-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.7427752214212466,
        "pitch": 0.01938837424207307,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": -0.5342346080433451,
          "pitch": 0.54445977432486,
          "rotation": 0,
          "target": "0-main-entrance"
        },
        {
          "yaw": 2.7103145306226946,
          "pitch": 0.3300096858242263,
          "rotation": 0,
          "target": "2-main-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-main-corridor",
      "name": "Main corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.398822801749578,
        "pitch": 0.21309182565398999,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": -0.0138531776767703,
          "pitch": 0.5344923392053644,
          "rotation": 0,
          "target": "1-entry"
        },
        {
          "yaw": -3.0409004670420963,
          "pitch": 0.40988151738293865,
          "rotation": 0,
          "target": "3-jame-wala-room"
        },
        {
          "yaw": 1.6794189281998149,
          "pitch": 0.48639948993467286,
          "rotation": 0,
          "target": "7-bakde-wala-room"
        },
        {
          "yaw": -1.5142335795058948,
          "pitch": 0.2576342162529528,
          "rotation": 0,
          "target": "16-hall"
        },
        {
          "yaw": -0.43788564627793747,
          "pitch": -0.3695027802524802,
          "rotation": 0,
          "target": "20-terrace-entrance"
        },
        {
          "yaw": -2.2996497504635496,
          "pitch": 0.5048514942323976,
          "rotation": 0,
          "target": "27-vachlo-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-jame-wala-room",
      "name": "Jame wala room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1787935090761916,
          "pitch": 0.4393983425661414,
          "rotation": 0,
          "target": "2-main-corridor"
        },
        {
          "yaw": 0.4991244917739319,
          "pitch": 0.4972081855338324,
          "rotation": 0,
          "target": "4-jame-wala-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-jame-wala-room-2",
      "name": "Jame wala room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4996266307650687,
          "pitch": 0.6074578722088262,
          "rotation": 0,
          "target": "3-jame-wala-room"
        },
        {
          "yaw": 0.8299424296808855,
          "pitch": 0.47073789569295243,
          "rotation": 0,
          "target": "5-rasoda-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-rasoda-entry",
      "name": "Rasoda entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7528412590755487,
          "pitch": 0.5450718211262853,
          "rotation": 0,
          "target": "4-jame-wala-room-2"
        },
        {
          "yaw": 1.1896822392163617,
          "pitch": 0.5556036083528753,
          "rotation": 0,
          "target": "6-rasoda"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-rasoda",
      "name": "Rasoda",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.886941997722836,
          "pitch": 0.5130432724298934,
          "rotation": 0,
          "target": "5-rasoda-entry"
        },
        {
          "yaw": -0.0036773140509804847,
          "pitch": 0.48736293585534796,
          "rotation": 0,
          "target": "12-jhula"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bakde-wala-room",
      "name": "Bakde wala room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.058369798509603,
          "pitch": 0.41877996489239067,
          "rotation": 0,
          "target": "2-main-corridor"
        },
        {
          "yaw": -0.7634004450869369,
          "pitch": 0.3742090929626549,
          "rotation": 0,
          "target": "8-garden-connect"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-garden-connect",
      "name": "Garden connect",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5527727751917144,
          "pitch": 0.47856148034263235,
          "rotation": 0,
          "target": "7-bakde-wala-room"
        },
        {
          "yaw": -0.17216585163880005,
          "pitch": 0.3685561897706773,
          "rotation": 0,
          "target": "19-mandir"
        },
        {
          "yaw": -3.0521682114275563,
          "pitch": 0.4505069501849661,
          "rotation": 0,
          "target": "30-keshavji-kakas-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-garden-entry",
      "name": "Garden entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2287658838230158,
          "pitch": 0.20899355716993107,
          "rotation": 0,
          "target": "0-main-entrance"
        },
        {
          "yaw": -0.46015932009116156,
          "pitch": 0.06688423540059674,
          "rotation": 0,
          "target": "10-garden-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-garden-side",
      "name": "Garden side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.719011670522132,
          "pitch": 0.19011626110398794,
          "rotation": 0,
          "target": "9-garden-entry"
        },
        {
          "yaw": -1.3338086498955715,
          "pitch": 0.12137192526752649,
          "rotation": 0,
          "target": "11-family"
        },
        {
          "yaw": 1.9438528750355974,
          "pitch": 0.24713660824838968,
          "rotation": 0,
          "target": "12-jhula"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-family",
      "name": "Family",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3878553212674731,
          "pitch": 0.1741399705717086,
          "rotation": 0,
          "target": "10-garden-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-jhula",
      "name": "Jhula",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.48085550430081625,
          "pitch": 0.19567729021087032,
          "rotation": 0,
          "target": "10-garden-side"
        },
        {
          "yaw": -2.2908655483745726,
          "pitch": 0.37465176173997605,
          "rotation": 0,
          "target": "6-rasoda"
        },
        {
          "yaw": 2.6743505208517977,
          "pitch": 0.27860220998997853,
          "rotation": 0,
          "target": "13-jhula-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-jhula-2",
      "name": "Jhula 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5654667432740723,
          "pitch": 0.28564311113777663,
          "rotation": 0,
          "target": "12-jhula"
        },
        {
          "yaw": 0.7809864261126123,
          "pitch": 0.21985007970230797,
          "rotation": 0,
          "target": "14-wash-area"
        },
        {
          "yaw": -1.0840905894289623,
          "pitch": 0.28133449588487736,
          "rotation": 0,
          "target": "15-meghji-kakas-bedroom"
        },
        {
          "yaw": 2.5582451554269,
          "pitch": 0.387702171778038,
          "rotation": 0,
          "target": "29-storage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-wash-area",
      "name": "Wash area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8883793250986312,
          "pitch": 0.24396819541196635,
          "rotation": 0,
          "target": "13-jhula-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-meghji-kakas-bedroom",
      "name": "Meghji kaka's Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.39933066920523075,
          "pitch": 0.2186482149382769,
          "rotation": 0,
          "target": "13-jhula-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.65879681242315,
          "pitch": 0.32937824627425627,
          "rotation": 0,
          "target": "2-main-corridor"
        },
        {
          "yaw": -1.1731055295111439,
          "pitch": 0.3515318147289008,
          "rotation": 0,
          "target": "17-tv-wala-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-tv-wala-room",
      "name": "TV wala room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4434736569464626,
          "pitch": 0.37777174121829304,
          "rotation": 0,
          "target": "16-hall"
        },
        {
          "yaw": 0.9964624456411606,
          "pitch": 0.4472039914949093,
          "rotation": 0,
          "target": "18-thakorji-no-room"
        },
        {
          "yaw": -2.667587692099726,
          "pitch": 0.7990629111908838,
          "rotation": 0,
          "target": "28-ashoks-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-thakorji-no-room",
      "name": "Thakorji no room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6274284630397347,
          "pitch": 0.4640314239268548,
          "rotation": 0,
          "target": "17-tv-wala-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-mandir",
      "name": "Mandir",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1897686799669032,
          "pitch": 0.4297247942013698,
          "rotation": 0,
          "target": "8-garden-connect"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-terrace-entrance",
      "name": "Terrace entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8880598672598907,
          "pitch": 0.2917675911774982,
          "rotation": 0,
          "target": "2-main-corridor"
        },
        {
          "yaw": -0.22654420557185695,
          "pitch": 0.22921676257577417,
          "rotation": 0,
          "target": "21-terrace-view"
        },
        {
          "yaw": 1.3154142150506232,
          "pitch": 0.3271468524190997,
          "rotation": 0,
          "target": "22-connect"
        },
        {
          "yaw": -3.106585896538526,
          "pitch": 0.29029169970395685,
          "rotation": 0,
          "target": "25-rasiks-bedroom"
        },
        {
          "yaw": -2.167076519106754,
          "pitch": 0.3503794740637236,
          "rotation": 0,
          "target": "26-pareshs-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-terrace-view",
      "name": "Terrace view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5493419335568888,
          "pitch": 0.2871110999225195,
          "rotation": 0,
          "target": "20-terrace-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-connect",
      "name": "Connect",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9722778599555024,
          "pitch": 0.2569661082297472,
          "rotation": 0,
          "target": "20-terrace-entrance"
        },
        {
          "yaw": -2.6122810929314433,
          "pitch": 0.42142404808782885,
          "rotation": 0,
          "target": "23-rishabhs-bedroom"
        },
        {
          "yaw": 0.31146392235352316,
          "pitch": 0.34005659913226793,
          "rotation": 0,
          "target": "24-pankajs-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-rishabhs-bedroom",
      "name": "Rishabh's Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.014888666282757868,
          "pitch": 0.3530497730992792,
          "rotation": 0,
          "target": "22-connect"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-pankajs-bedroom",
      "name": "Pankaj's Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6737938445279195,
          "pitch": 0.46212745225800234,
          "rotation": 0,
          "target": "22-connect"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-rasiks-bedroom",
      "name": "Rasik's Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "26-pareshs-bedroom",
      "name": "Paresh's Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.15444583928760203,
          "pitch": 0.2257562541584779,
          "rotation": 0,
          "target": "20-terrace-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-vachlo-room",
      "name": "Vachlo Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7775256338091783,
          "pitch": 0.3759137068465197,
          "rotation": 0,
          "target": "2-main-corridor"
        },
        {
          "yaw": -1.6454453050452091,
          "pitch": 0.27110904477492426,
          "rotation": 0,
          "target": "28-ashoks-bedroom"
        },
        {
          "yaw": -2.39700175684081,
          "pitch": 0.31095582842179326,
          "rotation": 0,
          "target": "29-storage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-ashoks-bedroom",
      "name": "Ashok's Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.022601993655388952,
          "pitch": 0.21203787168709987,
          "rotation": 0,
          "target": "27-vachlo-room"
        },
        {
          "yaw": -1.325950269604542,
          "pitch": 0.35029579102108954,
          "rotation": 0,
          "target": "17-tv-wala-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-storage",
      "name": "Storage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.102367613806951,
          "pitch": 0.4632869605751573,
          "rotation": 0,
          "target": "27-vachlo-room"
        },
        {
          "yaw": 0.45692156507038817,
          "pitch": 0.30615108972380156,
          "rotation": 0,
          "target": "13-jhula-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-keshavji-kakas-bedroom",
      "name": "Keshavji kaka's Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8063487534580176,
          "pitch": 0.5685557654005464,
          "rotation": 0,
          "target": "8-garden-connect"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
