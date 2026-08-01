// ======================================
// Agent Engine
// ======================================

const detectIntent = require("../services/intentService");

const {
    addHistory,
    setIntent
} = require("./conversationMemoryEngine");

const {
    getSchema
} = require("../agents/schemaAgent");

// ======================================

async function process(question) {

    // ----------------------------
    // Detect Intent
    // ----------------------------

    const { intent } = detectIntent(question);

    setIntent(intent);

    // ----------------------------
    // Save Conversation
    // ----------------------------

    addHistory("user", question);

    // ----------------------------
    // Load Database Knowledge
    // ----------------------------

    const schema = getSchema();

    console.log("\n========== AGENT ==========");
    console.log("Intent :", intent);
    console.log("Tables :", Object.keys(schema));
    console.log("===========================\n");

    return {

        intent,

        question,

        schema,

        timestamp: Date.now()

    };

}

module.exports = {

    process

};