python_functions_colour=80
//========================================================
Blockly.Blocks['python_int'] = {
  init: function() {
    this.appendValueInput("python_int_V")
        .setCheck(null)
        .appendField("int(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['python_int'] = function(block) {
  var value_python_int_v = Blockly.Python.valueToCode(block, 'python_int_V', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'int('+value_python_int_v+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//========================================================
Blockly.Blocks['python_ord'] = {
  init: function() {
    this.appendValueInput("python_ord_V")
        .setCheck(null)
        .appendField("ord(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['python_ord'] = function(block) {
  var value_python_ord_v = Blockly.Python.valueToCode(block, 'python_ord_V', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'ord('+value_python_ord_v+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//========================================================
Blockly.Blocks['python_str'] = {
  init: function() {
    this.appendValueInput("python_str_V")
        .setCheck(null)
        .appendField("str(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['python_ord'] = function(block) {
  var value_python_ord_v = Blockly.Python.valueToCode(block, 'python_str_V', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'str('+value_python_str_v+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//========================================================
Blockly.Blocks['python_time_import'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import time");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_time_import'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import time\n';
  return code;
};
//========================================================
Blockly.Blocks['python_time_sleep'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("time.sleep(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_time_sleep'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep('+value_name+')\n';
  return code;
};