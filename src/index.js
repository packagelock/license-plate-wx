Component({
	properties: {
        title: {
			type: String,
			value: '车牌键盘',
			/**
			 * 标题
			 * @default 车牌键盘
			 */
		},
		licensePlateShow: {
			type: Boolean,
			value: false,
			/**
			 * 控制是否显示组件
			 * @default false
			 */
		},
		isVibrate: {
			type: Boolean,
			value: false,
			/**
			 * 控制是否启用震动反馈
			 * @default false
			 */
		},
		isOnOverlayClose: {
			type: Boolean,
			value: false,
			/**
			 * 控制点击覆盖层是否关闭
			 * @default false
			 */
		}
	},
	data: {
		licensePlate: '',
		licensePlateLetter: false,
		provinceText: ['贵', '粤', '京', '冀', '沪', '津', '晋', '蒙', '辽', '吉', '黑', '苏', '浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '桂', '琼', '渝', '川', '云', '藏', '陕', '甘', '青', '宁'],
		lastWordText: ['新', '港', '澳', '学', '领', '警'],
		numText: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		wordText: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V'],
		lastWordText2: ['W', 'X', 'Y', 'Z']
	},
	observers: {
		"licensePlate": function (value) {
			if (value.length == 1) {
				this.setData({
					licensePlateLetter: true
				})
			}
			if (value.length == 0) {
				this.setData({
					licensePlateLetter: false
				})
			}
		}
	},

	methods: {
		onOverlay() {
			if (this.properties.isOnOverlayClose) {
				this.onCancel()
			}
		},
		async onText(e) {
			const value = e.currentTarget.dataset.item
			// 限制车牌位数
			if (this.data.licensePlate.length > 7) return
			if (this.data.isVibrate) await wx.vibrateShort()
			this.setData({
				licensePlate: this.data.licensePlate + value
			})
			console.log(this.data.licensePlate);
		},
		async changeToLetter() {
			if (this.data.isVibrate) await wx.vibrateShort()
			this.setData({
				licensePlateLetter: !this.data.licensePlateLetter
			})
		},
		async deleteText() {
			if (this.data.isVibrate) await wx.vibrateShort()
			this.setData({
				licensePlate: this.data.licensePlate.substring(0, this.data.licensePlate.length - 1)
			})
		},
		async onCancel() {
			if (this.data.isVibrate) await wx.vibrateShort()
			this.setData({
				licensePlateShow: false,
				licensePlate: '',
				licensePlateLetter: false
			}, () => {
				this.triggerEvent('onCancel')
			})
		},
		async confirm() {
			if (this.data.isVibrate) await wx.vibrateShort()
			this.triggerEvent('onConfirm', this.data.licensePlate)
			this.setData({
				licensePlateShow: false,
				licensePlate: '',
				licensePlateLetter: false
			})
		}
	}
})