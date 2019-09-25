#!/usr/bin/env node

const fs = require('fs');
fs.copyFileSync("./android-configurations/build-extras.gradle", "./platforms/android/build-extras.gradle");
