'use strict';

goog.provide('Blockly.Arduino.sensorAbot');

goog.require('Blockly.Arduino');

Blockly.Arduino['ultrasonic_configurar'] = function(block) {
  var trigger = block.getFieldValue('trigger');
  var echo = block.getFieldValue('echo');
  var ultraName = block.getFieldValue('ULTRA_NAME');
  var pinType_trigger = Blockly.Arduino.PinTypes.OUTPUT;
  var pinType_echo = Blockly.Arduino.PinTypes.INPUT;
  Blockly.Arduino.reservePin(block, trigger, pinType_trigger, 'Ultasonic');
  Blockly.Arduino.reservePin(block, echo, pinType_echo, 'Ultasonic');
  Blockly.Arduino.addInclude('sensorrp', '#include <Sensorultra.h>');
  var globalCode ='Sensorultra ' + ultraName + '('+trigger+','+echo+');';
  Blockly.Arduino.addDeclaration(ultraName,globalCode);
  //var code = '...;\n';
  return '';
};

Blockly.Arduino['ultrasonic'] = function(block) {
  var ultraInstanceName = block.getFieldValue('ULTRA_NAME');
  var distancia = block.getFieldValue('distancia');
  var code = ultraInstanceName+'.ultrasonico('+distancia+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['ultradistancia'] = function(block) {
  var ultraInstanceName = block.getFieldValue('ULTRA_NAME');
  var code = ultraInstanceName+'.ultradistancia()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
