require("dotenv").config();

const express = require("express");
const path = require("path");

require("./config/db");

const {
    loadKnowledge
} = require("./services/databaseKnowledge");

const {
    loadSchema
} = require("./agents/schemaAgent");

// =============================
// Routes
// =============================

const aiRoutes = require("./routes/aiRoutes");
const conversationRoutes = require("./routes/conversationRoutes");
const executeRoutes = require("./routes/executeRoutes");
const databaseRoutes = require("./routes/databaseRoutes");
const recoveryRoutes = require("./routes/recoveryRoutes");
const memoryRoutes = require("./routes/memoryRoutes");
const dbRoutes = require("./routes/dbRoutes");

// =============================

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// =============================
// API Routes
// =============================

app.use("/api", aiRoutes);
app.use("/api", conversationRoutes);
app.use("/api", executeRoutes);
app.use("/api", databaseRoutes);
app.use("/api", recoveryRoutes);
app.use("/api", memoryRoutes);
app.use("/api", dbRoutes);

// =============================

const PORT = process.env.PORT || 3000;

// =============================
// Start Server
// =============================

async function startServer() {

    try {

        console.time("Server Startup");

        console.log("\nLoading Database Knowledge...");
        await loadKnowledge();

        console.log("Loading Schema Agent...");
        await loadSchema();

        app.listen(PORT, () => {

            console.timeEnd("Server Startup");

            console.log(`🚀 Server running at http://localhost:${PORT}`);

        });

    }

    catch (err) {

        console.error("Startup Error:", err);

    }

}

startServer();