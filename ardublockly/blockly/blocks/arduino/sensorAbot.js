'use strict';

goog.provide('Blockly.Blocks.sensorABot');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['ultrasonic_configurar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Configurar ultrassónico")
        .appendField(
            new Blockly.FieldInstance('Ultra',
                                      'ultra',
                                      true, true, false),
            'ULTRA_NAME');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Trigger Pin: ")
        .appendField(new Blockly.FieldTextInput("3"), "trigger");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Echo Pin: ")
        .appendField(new Blockly.FieldTextInput("4"), "echo");
    this.setColour("#ff9900");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ultrasonic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ultrassónico ")
        .appendField(
            new Blockly.FieldInstance('Ultra',
                                      'ultra',
                                      false, true, false),
            'ULTRA_NAME')
            .appendField(" obstáculo a ")
        .appendField(new Blockly.FieldTextInput("40"), "distancia")
        .appendField(" cm ")
    this.setOutput(true, null);
    this.setColour("#cc7a00");
 this.setTooltip("");
 this.setHelpUrl("");
},
/**
  * Called whenever anything on the workspace changes.
  * It checks/warns if the selected stepper instance has a config block.
  * @this Blockly.Block
  */
 onchange: function() {
   if (!this.workspace) return;  // Block has been deleted.

   var instanceName = this.getFieldValue('ULTRA_NAME')
   if (Blockly.Instances.isInstancePresent(instanceName, 'Ultra', this)) {
     this.setWarningText(null);
   } else {
     // Set a warning to select a valid stepper config block
     this.setWarningText(
       Blockly.Msg.ARD_COMPONENT_WARN1.replace(
           '%1', 'ultrassónico').replace(
               '%2', instanceName));
   }
 }
};

Blockly.Blocks['ultradistancia'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ultrassónico ")
        .appendField(
            new Blockly.FieldInstance('Ultra',
                                      'ultra',
                                      false, true, false),
            'ULTRA_NAME')
            .appendField(" distância cm");
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setColour("#cc7a00");
    this.setTooltip("");
    this.setHelpUrl("");

  },
  getBlockType: function() {
  return Blockly.Types.NUMBER;
},
/**
  * Called whenever anything on the workspace changes.
  * It checks/warns if the selected stepper instance has a config block.
  * @this Blockly.Block
  */
 onchange: function() {
   if (!this.workspace) return;  // Block has been deleted.

   var instanceName = this.getFieldValue('ULTRA_NAME')
   if (Blockly.Instances.isInstancePresent(instanceName, 'Ultra', this)) {
     this.setWarningText(null);
   } else {
     // Set a warning to select a valid stepper config block
     this.setWarningText(
       Blockly.Msg.ARD_COMPONENT_WARN1.replace(
           '%1', 'ultrassónico').replace(
               '%2', instanceName));
   }
 }
};
