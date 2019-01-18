Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}};var _base=require('./_base.mask');var _base2=_interopRequireDefault(_base);var _custom=require('./custom.mask');var _custom2=_interopRequireDefault(_custom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SSN_MASKS={regular:'999-99-9999',obfuscated:'999-**-9999'};var SSN_SETTINGS={obfuscated:false};var MASK_TRANSLATION={'*':function _(val){return null;}};var SsnMask=function(_BaseMask){_inherits(SsnMask,_BaseMask);function SsnMask(){_classCallCheck(this,SsnMask);return _possibleConstructorReturn(this,(SsnMask.__proto__||Object.getPrototypeOf(SsnMask)).apply(this,arguments));}_createClass(SsnMask,[{key:'getValue',value:function getValue(value,settings){var selectedMask=this.getMask(value,settings);return _custom2.default.shared.getValue(value,{mask:selectedMask,translation:MASK_TRANSLATION});}},{key:'validate',value:function validate(value,settings){if(!!value){var selectedMask=this.getMask(value,settings);return value.length===selectedMask.length;}return true;}},{key:'getRawValue',value:function getRawValue(maskedValue,settings){if(!maskedValue)return[];return maskedValue.split('-').map(function(val){if(!val)return'';return val.trim();});}},{key:'getMask',value:function getMask(value,settings){var mergedSettings=_get(SsnMask.prototype.__proto__||Object.getPrototypeOf(SsnMask.prototype),'mergeSettings',this).call(this,SSN_SETTINGS,settings);var selectedMask=this._selectMask(mergedSettings.obfuscated);return selectedMask;}},{key:'_selectMask',value:function _selectMask(issuer,obfuscated){var maskType=obfuscated?'obfuscated':'regular';return SSN_MASKS[maskType];}}],[{key:'getType',value:function getType(){return'ssn';}}]);return SsnMask;}(_base2.default);exports.default=SsnMask;