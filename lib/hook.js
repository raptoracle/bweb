/*!
 * hook.js - hook object for bweb
 * Copyright (c) 2017, Christopher Jeffrey (MIT License).
 * https://github.com/raptoracle/bweb
 */

'use strict';

const assert = require('bsert');

/**
 * Hook
 */

class Hook {
  /**
   * Create a hook.
   * @constructor
   * @ignore
   */

  constructor(path, handler) {
    assert(typeof path === 'string');
    assert(typeof handler === 'function' || typeof handler === 'object');
    assert(handler !== null);

    this.path = path;
    this.handler = handler;
    this.arity = 0;

    if (typeof handler === 'function')
      this.arity = handler.length;
  }
}

/*
 * Expose
 */

module.exports = Hook;
