<<<<<<< HEAD
const _ = require('lodash');
const assert = require('assert');
const omit = require('omit-deep');
const environment = process.env.NODE_ENV;

const configs = {
  production: function() {
    return {
      baseURL: assertEnvVar(
        'BASE_URL',
        'The URL of the website including the protocol and the port if needed'
      ),
      port: assertEnvVar(
        'PORT',
        'The port that the REST api should be listening on'
      ),
      vgoURL: assertEnvVar(
        'VGO_URL',
        'VGO URL naudojamas gauti dėžių ir atidarymų informacijai'
      ),
      vgoAPIKey: assertEnvVar('VGO_API_KEY', 'The VGO puslapio API raktas'),
      affiliateAddress: assertEnvVar(
        'AFFILIATE_ADDRESS',
        'Ethereum adresas dėl atlygių rinkimo'
      ),
      sessionKeys: [
        assertEnvVar('SESSION_KEY', 'Raktas, naudojamas sesijos valdymui'),
      ],
      steamApiKey: assertEnvVar(
        'STEAM_API_KEY',
        'Raktas, naudojamas steam prisijungimo integravimui.'
      ),
      log: {
        level: optionalEnvVar('LOG_LEVEL', 'Log level', 'info'),
      },
    };
  },
  development: function() {
    return {
      baseURL: 'http://localhost:3000',
      port: 3001,
      vgoURL: 'http://localhost:3002',
      vgoAPIKey: 'somekey',
      affiliateAddress: '0x0000000000000000',
      sessionKeys: ['this is not secure'],
      steamApiKey: assertEnvVar(
        'STEAM_API_KEY',
        'Raktas, naudojamas steam prisijungimo integravimui'
      ),
      log: {
        level: 'debug',
      },
    };
  },
  qa: function() {
    return {
      baseURL: 'http://localhost:3000',
      port: 3001,
      vgoURL: 'http://localhost:3002',
      vgoAPIKey: 'somekey',
      affiliateAddress: '0x0000000000000000',
      sessionKeys: ['this is not secure'],
      steamApiKey: assertEnvVar(
        'STEAM_API_KEY',
      'Raktas, naudojamas steam prisijungimo integravimui'
      ),
      log: {
        level: 'debug',
      },
    };
  },
};

let config = configs[environment];

assert(
  config,
  `Configuration ${environment} does not exist, NODE_ENV must be one of ${Object.keys(
    configs
  )}`
);

config = config();

// Convenience helper to display the config with sensitive fields stripped
config.toWire = function() {
  return omit(_.cloneDeep(config), ['password', 'toWire']);
};

console.log(
  `Running in ${environment} mode. Config is ${JSON.stringify(
    config.toWire(),
    null,
    2
  )}\n--\n'password' keys omitted.`
);

module.exports = config;

function assertEnvVar(envVar, description) {
  const value = process.env[envVar];
  assert(
    value !== null && value !== undefined,
    `Environment variable ${envVar} (currently is ${value}) must be present. Description: ${description}`
  );
  return value;
}

function optionalEnvVar(envVar, description, defaultValue) {
  const value = process.env[envVar];
  if (value === null || value === undefined) {
    if (defaultValue === undefined) {
      console.warn(
        `Optional environment variable ${envVar} (currently is ${value}) not present. Description: ${description}`
      );
    } else {
      console.warn(
        `Optional environment variable ${envVar} (currently is ${value}) not present. Description: ${description}. Using default value ${defaultValue}`
      );
    }
  }
  return value || defaultValue;
}
=======
const _ = require('lodash');
const assert = require('assert');
const omit = require('omit-deep');
const environment = process.env.NODE_ENV;

const configs = {
  production: function() {
    return {
      baseURL: assertEnvVar(
        'BASE_URL',
        'The URL of the website including the protocol and the port if needed'
      ),
      port: assertEnvVar(
        'PORT',
        'The port that the REST api should be listening on'
      ),
      vgoURL: assertEnvVar(
        'VGO_URL',
        'VGO URL naudojamas gauti dėžių ir atidarymų informacijai'
      ),
      vgoAPIKey: assertEnvVar('VGO_API_KEY', 'The VGO puslapio API raktas'),
      affiliateAddress: assertEnvVar(
        'AFFILIATE_ADDRESS',
        'Ethereum adresas dėl atlygių rinkimo'
      ),
      sessionKeys: [
        assertEnvVar('SESSION_KEY', 'Raktas, naudojamas sesijos valdymui'),
      ],
      steamApiKey: assertEnvVar(
        'STEAM_API_KEY',
        'Raktas, naudojamas steam prisijungimo integravimui.'
      ),
      log: {
        level: optionalEnvVar('LOG_LEVEL', 'Log level', 'info'),
      },
    };
  },
  development: function() {
    return {
      baseURL: 'http://localhost:3000',
      port: 3001,
      vgoURL: 'http://localhost:3002',
      vgoAPIKey: 'somekey',
      affiliateAddress: '0x0000000000000000',
      sessionKeys: ['this is not secure'],
      steamApiKey: assertEnvVar(
        'STEAM_API_KEY',
        'Raktas, naudojamas steam prisijungimo integravimui'
      ),
      log: {
        level: 'debug',
      },
    };
  },
  qa: function() {
    return {
      baseURL: 'http://localhost:3000',
      port: 3001,
      vgoURL: 'http://localhost:3002',
      vgoAPIKey: 'somekey',
      affiliateAddress: '0x0000000000000000',
      sessionKeys: ['this is not secure'],
      steamApiKey: assertEnvVar(
        'STEAM_API_KEY',
      'Raktas, naudojamas steam prisijungimo integravimui'
      ),
      log: {
        level: 'debug',
      },
    };
  },
};

let config = configs[environment];

assert(
  config,
  `Configuration ${environment} does not exist, NODE_ENV must be one of ${Object.keys(
    configs
  )}`
);

config = config();

// Convenience helper to display the config with sensitive fields stripped
config.toWire = function() {
  return omit(_.cloneDeep(config), ['password', 'toWire']);
};

console.log(
  `Running in ${environment} mode. Config is ${JSON.stringify(
    config.toWire(),
    null,
    2
  )}\n--\n'password' keys omitted.`
);

module.exports = config;

function assertEnvVar(envVar, description) {
  const value = process.env[envVar];
  assert(
    value !== null && value !== undefined,
    `Environment variable ${envVar} (currently is ${value}) must be present. Description: ${description}`
  );
  return value;
}

function optionalEnvVar(envVar, description, defaultValue) {
  const value = process.env[envVar];
  if (value === null || value === undefined) {
    if (defaultValue === undefined) {
      console.warn(
        `Optional environment variable ${envVar} (currently is ${value}) not present. Description: ${description}`
      );
    } else {
      console.warn(
        `Optional environment variable ${envVar} (currently is ${value}) not present. Description: ${description}. Using default value ${defaultValue}`
      );
    }
  }
  return value || defaultValue;
}
>>>>>>> 0a276c0d594bd0ccc1910be31f0fc259c6319449
