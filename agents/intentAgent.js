// =====================================
// Intent Agent
// =====================================

function detectIntent(question) {

    question = question.toLowerCase().trim();

    // ============================
    // CREATE TABLE
    // ============================

    if (
        question.includes("create table") ||
        question.includes("make table") ||
        question.includes("new table")
    ) {

        return {

            intent: "CREATE_TABLE",
            confidence: 0.99

        };

    }

    // ============================
    // INSERT
    // ============================

    if (

        question.includes("insert") ||
        question.includes("add") ||
        question.includes("store") ||
        question.includes("save")

    ) {

        return {

            intent: "INSERT",
            confidence: 0.95

        };

    }

    // ============================
    // UPDATE
    // ============================

    if (

        question.includes("update") ||
        question.includes("change") ||
        question.includes("modify") ||
        question.includes("edit")

    ) {

        return {

            intent: "UPDATE",
            confidence: 0.95

        };

    }

    // ============================
    // DELETE
    // ============================

    if (

        question.includes("delete") ||
        question.includes("remove") ||
        question.includes("erase")

    ) {

        return {

            intent: "DELETE",
            confidence: 0.95

        };

    }

    // ============================
    // ALTER
    // ============================

    if (

        question.includes("add column") ||
        question.includes("rename column") ||
        question.includes("drop column")

    ) {

        return {

            intent: "ALTER",
            confidence: 0.95

        };

    }

    // ============================
    // SELECT
    // ============================

    if (

        question.includes("show") ||
        question.includes("display") ||
        question.includes("list") ||
        question.includes("find") ||
        question.includes("get") ||
        question.includes("search") ||
        question.includes("view")

    ) {

        return {

            intent: "SELECT",
            confidence: 0.90

        };

    }

    return {

        intent: "UNKNOWN",
        confidence: 0.40

    };

}

module.exports = {

    detectIntent

};