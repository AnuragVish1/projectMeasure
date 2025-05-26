interface ratesData {
	code: number;
	description: string;
	unit: string;
	rate: number;
}

const rateData = <ratesData[]>[
	{
		code: 1,
		description: 'MS PIPE LINE FABRICATION',
		unit: 'MTR',
		rate: 96
	},
	{
		code: 2,
		description: 'CS SEAMLESS PIPE LINE',
		unit: 'MTR',
		rate: 135
	},
	{
		code: 3,
		description: 'CS SEAMLESS PIPE LINE 80 SCH',
		unit: 'MTR',
		rate: 155
	},
	{
		code: 4,
		description: 'CS SEAMLESS PIPE LINE 160 SCH',
		unit: 'MTR',
		rate: 225
	},
	{
		code: 5,
		description: 'SS PIPE LINE FABRICATION',
		unit: 'MTR',
		rate: 250
	},
	{
		code: 6,
		description: 'HDPE PIPE LINE',
		unit: 'MTR',
		rate: 68
	},
	{
		code: 7,
		description: 'HDPE PIPE WITH FRP COATING',
		unit: 'MTR',
		rate: 160
	},
	{
		code: 8,
		description: 'MS JACKETED PIPING',
		unit: 'MTR',
		rate: 182
	},
	{
		code: 9,
		description: 'MS GI CS PIPE LINE',
		unit: 'MTR',
		rate: 85
	},
	{
		code: 10,
		description: 'HDPE NON METALLIC PIPE LINE',
		unit: 'MTR',
		rate: 72
	},
	{
		code: 11,
		description: 'LINED PIPES',
		unit: 'MTR',
		rate: 102
	},
	{
		code: 12,
		description: 'GLASS TUBE LEVEL INDICATOR 1 MTR',
		unit: 'NO',
		rate: 220
	},
	{
		code: 13,
		description: 'GLASS TUBE LEVEL INDICATOR 3 MTR',
		unit: 'NO',
		rate: 300
	},
	{
		code: 14,
		description: 'GLASS TUBE LEVEL INDICATOR 7 MTR',
		unit: 'NO',
		rate: 350
	},
	{
		code: 15,
		description: 'HDPE NOZZLE FABRICATION',
		unit: 'MTR',
		rate: 220
	},
	{
		code: 16,
		description: 'FRP COATING',
		unit: 'SQM',
		rate: 900
	},
	{
		code: 17,
		description: 'DYE PENETRATION TEST',
		unit: 'MTR',
		rate: 50
	},
	{
		code: 18,
		description: 'RADIOGRAPHY',
		unit: 'MTR',
		rate: 230
	},
	{
		code: 19,
		description: 'PRESSURE GAUGE INSTALLATION',
		unit: 'NO',
		rate: 75
	},
	{
		code: 20,
		description: 'PIPE DISMANTLING',
		unit: 'MTR',
		rate: 45
	},
	{
		code: 21,
		description: 'PRESSURE TESTING',
		unit: 'MTR',
		rate: 45
	},
	{
		code: 22,
		description: 'PRESSURE TESTING EQUIPMENT',
		unit: 'M3',
		rate: 785
	},
	{
		code: 23,
		description: 'VALVE INSTALLATION / DISMANTLING',
		unit: 'NO',
		rate: 95
	},
	{
		code: 24,
		description: 'PIPE ERECTION',
		unit: 'MTR',
		rate: 80
	},
	{
		code: 25,
		description: 'LINED PIPE ERECTION',
		unit: 'MTR',
		rate: 98
	},
	{
		code: 26,
		description: 'FITTER SUPPLY',
		unit: 'DAY',
		rate: 930
	},
	{
		code: 27,
		description: 'RIGGER SUPPLY',
		unit: 'DAY',
		rate: 805
	},
	{
		code: 28,
		description: 'HELPER SUPPLY',
		unit: 'DAY',
		rate: 650
	},
	{
		code: 29,
		description: 'WELDER SUPPLY',
		unit: 'DAY',
		rate: 1000
	},
	{
		code: 30,
		description: 'EQUIPMENT LOADING UNLOADING',
		unit: 'TON',
		rate: 1130
	},
	{
		code: 31,
		description: 'EQUIPMENT SHIFTING',
		unit: 'TON',
		rate: 16
	},
	{
		code: 32,
		description: 'WEIGHT UP TO 100 KG',
		unit: 'NO',
		rate: 745
	},
	{
		code: 33,
		description: 'WEIGHT UP TO 250 KG',
		unit: 'NO',
		rate: 2050
	},
	{
		code: 34,
		description: 'PVC NON METALLIC PIPE 20-32 NB',
		unit: 'MTR',
		rate: 118
	},
	{
		code: 35,
		description: 'PVC NON METALLIC PIPE 50-63 NB',
		unit: 'MTR',
		rate: 155
	},
	{
		code: 36,
		description: 'PVC NON METALLIC PIPE 75-110 NB',
		unit: 'MTR',
		rate: 200
	},
	{
		code: 37,
		description: 'PVC NON METALLIC PIPE 160 NB',
		unit: 'MTR',
		rate: 280
	},
	{
		code: 38,
		description: 'PVC NON METALLIC PIPE 200 NB',
		unit: 'MTR',
		rate: 342
	},
	{
		code: 39,
		description: 'PVC NON METALLIC PIPE 250 NB',
		unit: 'MTR',
		rate: 446
	},
	{
		code: 40,
		description: 'PVC NON METALLIC PIPE 315 NB',
		unit: 'MTR',
		rate: 550
	},
	{
		code: 41,
		description: 'STRUCTURE ERECTION',
		unit: 'KG',
		rate: 9
	},
	{
		code: 42,
		description: 'STRUCTURE FABRICATION',
		unit: 'KG',
		rate: 20
	},
	{
		code: 43,
		description: 'STRUCTURE DISMANTLING',
		unit: 'KG',
		rate: 9
	},
	{
		code: 44,
		description: 'CHEMICAL ANCHOR BOLT 12MM X 150MM',
		unit: 'NO',
		rate: 750
	},
	{
		code: 45,
		description: 'CHEMICAL ANCHOR BOLT 16MM X 150MM',
		unit: 'NO',
		rate: 800
	},
	{
		code: 46,
		description: 'CHEMICAL ANCHOR BOLT 20MM X 150MM',
		unit: 'NO',
		rate: 1000
	},
	{
		code: 47,
		description: 'FRP ROOF SHEET INSTALLATION',
		unit: 'SQM',
		rate: 200
	},
	{
		code: 48,
		description: 'PIPE SUPPORT INSTALLATION',
		unit: 'NO',
		rate: 350
	},
	{
		code: 49,
		description: 'PIPING SUPPORT',
		unit: 'KG',
		rate: 30
	},
	{
		code: 50,
		description: 'MS CUTTING UP TO 12MM',
		unit: 'MTR',
		rate: 250
	},
	{
		code: 51,
		description: 'MS WELDING UP TO 12MM',
		unit: 'MTR',
		rate: 550
	},
	{
		code: 52,
		description: 'ANCHOR BOLTING AND DRILLING',
		unit: 'NO',
		rate: 90
	},
	{
		code: 53,
		description: 'INSULATION REMOVAL',
		unit: 'SQM',
		rate: 75
	},
	{
		code: 54,
		description: 'HYDRA CRANE UP TO 15 TON',
		unit: 'HOUR',
		rate: 950
	},
	{
		code: 55,
		description: 'CRANE UP TO 50 TON',
		unit: 'DAY',
		rate: 30000
	},
	{
		code: 56,
		description: 'CRANE UP TO 75 TON',
		unit: 'DAY',
		rate: 55000
	},
	{
		code: 57,
		description: 'CRANE UP TO 100 TON',
		unit: 'DAY',
		rate: 90000
	},
	{
		code: 58,
		description: 'CRANE UP TO 125 TON',
		unit: 'DAY',
		rate: 110000
	},
	{
		code: 59,
		description: 'ROUND BAR CUTTING',
		unit: 'NO',
		rate: 30
	},
	{
		code: 60,
		description: 'ROUND BAR WELDING',
		unit: 'NO',
		rate: 45
	},
	{
		code: 61,
		description: 'EARTHING STRIPS 50X6MM GI',
		unit: 'MTR',
		rate: 50
	},
	{
		code: 62,
		description: 'EARTHING STRIPS 25X3MM GI',
		unit: 'MTR',
		rate: 52
	},
	{
		code: 63,
		description: 'EARTHING STRIPS 50X3MM COPPER',
		unit: 'MTR',
		rate: 90
	},
	{
		code: 64,
		description: 'EARTHING STRIPS 25X5MM COPPER',
		unit: 'MTR',
		rate: 95
	},
	{
		code: 65,
		description: 'BOLT CUTTING UP TO 24MM',
		unit: 'NO',
		rate: 45
	},
	{
		code: 66,
		description: 'GRATING FIXING',
		unit: 'SQFT',
		rate: 62
	},
	{
		code: 67,
		description: 'GRATING DISMANTLING',
		unit: 'SQFT',
		rate: 50
	},
	{
		code: 68,
		description: 'SS TO MS WELDING',
		unit: 'MTR',
		rate: 210
	},
	{
		code: 69,
		description: 'HAND RAILING FABRICATION',
		unit: 'MTR',
		rate: 290
	},
	{
		code: 70,
		description: 'HAND RAILING INSTALLATION',
		unit: 'MTR',
		rate: 130
	},
	{
		code: 71,
		description: 'HAND RAILING DISMANTLING',
		unit: 'MTR',
		rate: 100
	},
	{
		code: 72,
		description: 'HOLE DRILLING 8MM TO 27MM',
		unit: 'NO',
		rate: 30
	},
	{
		code: 73,
		description: 'CHEMICAL ANCHOR FASTENER 20X260MM',
		unit: 'NO',
		rate: 1250
	},
	{
		code: 74,
		description: 'POWDER COATED GALVALUME SHEET',
		unit: 'NO',
		rate: 300
	},
	{
		code: 75,
		description: 'SS BUTT WELD JOINT WITH ARGON',
		unit: 'MTR',
		rate: 250
	},
	{
		code: 76,
		description: 'EQUIPMENT ERECTION',
		unit: 'TON',
		rate: 3800
	},
	{
		code: 77,
		description: 'EQUIPMENT ERECTION',
		unit: 'TON',
		rate: 4500
	},
	{
		code: 78,
		description: 'EQUIPMENT ERECTION',
		unit: 'TON',
		rate: 5500
	},
	{
		code: 79,
		description: 'EQUIPMENT ERECTION',
		unit: 'TON',
		rate: 6400
	},
	{
		code: 80,
		description: 'EQUIPMENT DISMANTLING',
		unit: 'TON',
		rate: 4300
	},
	{
		code: 81,
		description: 'EQUIPMENT DISMANTLING',
		unit: 'TON',
		rate: 5000
	},
	{
		code: 82,
		description: 'EQUIPMENT DISMANTLING',
		unit: 'TON',
		rate: 6200
	},
	{
		code: 83,
		description: 'EQUIPMENT DISMANTLING',
		unit: 'TON',
		rate: 7500
	},
	{
		code: 84,
		description: 'NON METALLIC EQUIPMENT DISMANTLING',
		unit: 'TON',
		rate: 4000
	},
	{
		code: 85,
		description: 'NON METALLIC EQUIPMENT DISMANTLING',
		unit: 'TON',
		rate: 4000
	},
	{
		code: 86,
		description: 'LINED EQUIPMENT DISMANTLING',
		unit: 'TON',
		rate: 4000
	},
	{
		code: 87,
		description: 'LINED EQUIPMENT DISMANTLING',
		unit: 'TON',
		rate: 4200
	},
	{
		code: 88,
		description: 'LINED EQUIPMENT DISMANTLING',
		unit: 'TON',
		rate: 5000
	},
	{
		code: 89,
		description: 'LINED EQUIPMENT DISMANTLING',
		unit: 'TON',
		rate: 6000
	},
	{
		code: 90,
		description: 'VESSEL CLAMP FABRICATION',
		unit: 'NO',
		rate: 195
	},
	{
		code: 91,
		description: 'PIPE CLAMP FABRICATION',
		unit: 'NO',
		rate: 150
	},
	{
		code: 92,
		description: 'PIPE CLAMP INSTALLATION',
		unit: 'NO',
		rate: 90
	},
	{
		code: 93,
		description: 'WRAPPING COATING OF PIPE LINE',
		unit: 'SQM',
		rate: 1500
	},
	{
		code: 94,
		description: 'BLIND FLANGE FITTING OR REMOVAL',
		unit: 'MTR',
		rate: 70
	},
	{
		code: 95,
		description: 'NON METALLIC EQUIPMENT ERECTION',
		unit: 'TON',
		rate: 850
	},
	{
		code: 96,
		description: 'NON METALLIC EQUIPMENT ERECTION',
		unit: 'TON',
		rate: 1200
	},
	{
		code: 97,
		description: 'NON METALLIC EQUIPMENT ERECTION',
		unit: 'TON',
		rate: 1500
	},
	{
		code: 98,
		description: 'NON METALLIC EQUIPMENT ERECTION',
		unit: 'TON',
		rate: 2200
	},
	{
		code: 99,
		description: 'LINED EQUIPMENT ERECTION',
		unit: 'TON',
		rate: 3500
	},
	{
		code: 100,
		description: 'LINED EQUIPMENT ERECTION',
		unit: 'TON',
		rate: 4500
	},
	{
		code: 101,
		description: 'LINED EQUIPMENT ERECTION',
		unit: 'TON',
		rate: 5000
	},
	{
		code: 102,
		description: 'LINED EQUIPMENT ERECTION',
		unit: 'TON',
		rate: 6500
	},
	{
		code: 103,
		description: 'FARANA SUPPLY',
		unit: 'DAY',
		rate: 12000
	},
	{
		code: 104,
		description: 'CONFINE WORK',
		unit: 'NO',
		rate: 4500
	},
	{
		code: 110,
		description: 'MISCELLANEOUS WORK',
		unit: 'NO',
		rate: 500
	},
	{
		code: 111,
		description: 'CABLE TRAY DISMANTLING',
		unit: 'NO',
		rate: 500
	},
	{
		code: 113,
		description: 'SHEET DISMANTLING',
		unit: 'SQM',
		rate: 266
	},
	{
		code: 114,
		description: 'SHEET FABRICATION AND FITTING',
		unit: 'SQM',
		rate: 304
	},
	{
		code: 115,
		description: 'MISCELLANEOUS WORK',
		unit: 'NO',
		rate: 300
	}
];

export default rateData;
