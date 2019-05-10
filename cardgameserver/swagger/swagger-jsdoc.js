'use strict'
 
module.exports = {
	swaggerDefinition: {
		// 정보
		info: {
			title: `Node.js Server API`,
			version: `0.0.1`,
			description: `card.js 서버 API 설명서`,
		},
		// 주소
        host: `localhost:11220`,
		// 기본 root path
		basePath: `/`,
		contact: {
			email: `lenon461@gmail.com`,
		},
		// 각 api에서 설명을 기록할 때 사용할 constant들을 미리 등록해놓는것
		schemes: [`http`, `https`], // 가능한 통신 방식
        definitions: {
			'format': {
				type: `object`,
				properties: {
					peoples_hand: {
						type: `array`,
                        items: 'integer',
                            
					},
					peoples_acquired: {
						type: `object`,
					},
				},
			},
		},
    },
	apis: [`./routes/**/*.js`], // api 파일 위치들 
}

