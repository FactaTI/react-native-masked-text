import BaseMask from './_base.mask'
import CustomMask from './custom.mask'

const SSN_MASKS = {
    regular: '999-**-9999',
    obfuscated: '***-**-9999'
}

const SSN_SETTINGS = {
    obfuscated: false,
}

const MASK_TRANSLATION = {
    '*': val => '#'
}

export default class SsnMask extends BaseMask {
    static getType() {
        return 'ssn'
    }

    getValue(value, settings) {
        let selectedMask = this.getMask(value, settings)
        return CustomMask.shared.getValue(value, {
            mask: selectedMask,
            translation: MASK_TRANSLATION
        })
    }

    validate(value, settings) {
        if (!!value) {
            let selectedMask = this.getMask(value, settings)
            return value.length === selectedMask.length
        }

        return true
    }

    getRawValue(maskedValue, settings) {
        if (!maskedValue) return []

        return maskedValue.split('-').map(val => {
            if (!val) return ''

            return val.trim()
        })
    }

    getMask(value, settings) {
        let mergedSettings = super.mergeSettings(SSN_SETTINGS, settings)
        const selectedMask = this._selectMask(mergedSettings.obfuscated)

        return selectedMask
    }

    _selectMask(issuer, obfuscated) {
        const maskType = obfuscated ? 'obfuscated' : 'regular'

        return SSN_MASKS[maskType]
    }
}
