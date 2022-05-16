'use strict';

goog.provide('Blockly.Blocks.motorAbot');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['motor_configurar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Configurar Motor")
        .appendField(
            new Blockly.FieldInstance('Motor',
                                      'motor',
                                      true, true, false),
            'MOTOR_NAME');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Enable Pin ")
        .appendField(new Blockly.FieldTextInput("7"), "en");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("IN Pin")
        .appendField(new Blockly.FieldTextInput("8"), "in_1");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("IN Pin")
            .appendField(new Blockly.FieldTextInput("9"), "in_2");
    this.setColour("#003399");
 this.setTooltip("Configurar os Motores");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_avancar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Motor ")
        .appendField(
            new Blockly.FieldInstance('Motor',
                                      'motor',
                                      false, true, false),
            'MOTOR_NAME')
        .appendField(" - Avançar")
        .appendField("Velocidade ")
        .appendField(new Blockly.FieldTextInput("255"), "vel");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#a366ff");
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

    var instanceName = this.getFieldValue('MOTOR_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Motor', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid stepper config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', 'Motor').replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['motor_parar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Motor ")
        .appendField(
            new Blockly.FieldInstance('Motor',
                                      'motor',
                                      false, true, false),
            'MOTOR_NAME')
        .appendField(" - Parar");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#a366ff");
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

   var instanceName = this.getFieldValue('MOTOR_NAME')
   if (Blockly.Instances.isInstancePresent(instanceName, 'Motor', this)) {
     this.setWarningText(null);
   } else {
     // Set a warning to select a valid stepper config block
     this.setWarningText(
       Blockly.Msg.ARD_COMPONENT_WARN1.replace(
           '%1', 'Motor').replace(
               '%2', instanceName));
   }
 }
};

Blockly.Blocks['motor_viraresq'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Motor ")
        .appendField(
            new Blockly.FieldInstance('Motor',
                                      'motor',
                                      false, true, false),
            'MOTOR_NAME')
        .appendField(" - Virar Esquerda")
        .appendField("Velocidade ")
        .appendField(new Blockly.FieldTextInput("255"), "vel");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#a366ff");
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

   var instanceName = this.getFieldValue('MOTOR_NAME')
   if (Blockly.Instances.isInstancePresent(instanceName, 'Motor', this)) {
     this.setWarningText(null);
   } else {
     // Set a warning to select a valid stepper config block
     this.setWarningText(
       Blockly.Msg.ARD_COMPONENT_WARN1.replace(
           '%1', 'Motor').replace(
               '%2', instanceName));
   }
 }
};

Blockly.Blocks['motor_virardir'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Motor ")
        .appendField(
            new Blockly.FieldInstance('Motor',
                                      'motor',
                                      false, true, false),
            'MOTOR_NAME')
        .appendField(" - Virar Direita")
        .appendField("Velocidade ")
        .appendField(new Blockly.FieldTextInput("255"), "vel");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#a366ff");
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

     var instanceName = this.getFieldValue('MOTOR_NAME')
     if (Blockly.Instances.isInstancePresent(instanceName, 'Motor', this)) {
       this.setWarningText(null);
     } else {
       // Set a warning to select a valid stepper config block
       this.setWarningText(
         Blockly.Msg.ARD_COMPONENT_WARN1.replace(
             '%1', 'Motor').replace(
                 '%2', instanceName));
     }
   }
};

Blockly.Blocks['motor_recuar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Motor ")
        .appendField(
            new Blockly.FieldInstance('Motor',
                                      'motor',
                                      false, true, false),
            'MOTOR_NAME')
        .appendField(" - Recuar")
        .appendField("Velocidade ")
        .appendField(new Blockly.FieldTextInput("255"), "vel");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#a366ff");
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

   var instanceName = this.getFieldValue('MOTOR_NAME')
   if (Blockly.Instances.isInstancePresent(instanceName, 'Motor', this)) {
     this.setWarningText(null);
   } else {
     // Set a warning to select a valid stepper config block
     this.setWarningText(
       Blockly.Msg.ARD_COMPONENT_WARN1.replace(
           '%1', 'Motor').replace(
               '%2', instanceName));
   }
 }
};
