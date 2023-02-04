// eslint-disable-next-line no-undef
const SERVICES = new Map();

/**
 * Get service
 * @param {Object} target Class value
 */
const add = (target) => SERVICES.set(target.name, new target());

/**
 * Set service
 * @param {Object} target Class value
 * @returns {Object} Instance service
 */
const get = (target) => SERVICES.get(target.name);


const Injectable = (target) => add(target);

const Inject = (target) => () => () => get(target);

module.exports = { Injectable, Inject };
