'use strict';

goog.provide('Blockly.Arduino.motorAbot');

goog.require('Blockly.Arduino');

Blockly.Arduino['motor_configurar'] = function(block) {
  Blockly.Arduino.addInclude('motorrp', '#include <Motor.h>');
  var en = block.getFieldValue('en');
  var in_1 = block.getFieldValue('in_1');
  var in_2 = block.getFieldValue('in_2');
  var motorName = block.getFieldValue('MOTOR_NAME');
  var globalCode ='Motor ' + motorName + '('+en+','+in_1+','+in_2+');';
  Blockly.Arduino.addDeclaration(motorName,globalCode);
  //var code = '';
  return '';
};

Blockly.Arduino['motor_avancar'] = function(block) {
  var motorInstanceName = block.getFieldValue('MOTOR_NAME');
  var vel = block.getFieldValue('vel');
  Blockly.Arduino.addInclude('motorrp', '#include <Motor.h>');

  var code = motorInstanceName+'.avancar('+vel+');\n';
  return code;
};

Blockly.Arduino['motor_parar'] = function(block) {
  var motorInstanceName = block.getFieldValue('MOTOR_NAME');
  var vel = block.getFieldValue('vel');
  Blockly.Arduino.addInclude('motorrp', '#include <Motor.h>');

  var code = motorInstanceName+'.parar('+vel+');\n';
  return code;
};

Blockly.Arduino['motor_viraresq'] = function(block) {
  var motorInstanceName = block.getFieldValue('MOTOR_NAME');
  var vel = block.getFieldValue('vel');
  Blockly.Arduino.addInclude('motorrp', '#include <Motor.h>');

  var code = motorInstanceName+'.viraresq('+vel+');\n';
  return code;
};

Blockly.Arduino['motor_virardir'] = function(block) {
  var motorInstanceName = block.getFieldValue('MOTOR_NAME');
  var vel = block.getFieldValue('vel');
  Blockly.Arduino.addInclude('motorrp', '#include <Motor.h>');

  var code = motorInstanceName+'.virardir('+vel+');\n';
  return code;
};

Blockly.Arduino['motor_recuar'] = function(block) {
  var motorInstanceName = block.getFieldValue('MOTOR_NAME');
  var vel = block.getFieldValue('vel');
  Blockly.Arduino.addInclude('motorrp', '#include <Motor.h>');

  var code = motorInstanceName+'.virardir('+vel+');\n';
  return code;
};
