import {OpenAPIV3} from "openapi-types";

export function getPublicRegistryOpenApi(): OpenAPIV3.Document {
    const baseUrl = process.env.PRODUCER_API_BASE || 'http://localhost:3000';

    const openapi: OpenAPIV3.Document = {
        openapi: '3.0.3',
        info: {
            title: 'Armenian Public Registry API',
            version: '1.0.0',
            description:
                'RESTful API for accessing Armenian public registry data including persons, addresses, and documents.'
        },
        servers: [
            {
                url: baseUrl,
                description: 'Base URL for  Registry API. '+' Openapi spec available at '+baseUrl+'/api/v1/openapi'
            }
        ],
        paths: {
            '/api/v1/persons': {
                get: {
                    summary: 'List all persons',
                    responses: {
                        200: {
                            description: 'A list of persons with linked address and documents',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: { $ref: '#/components/schemas/Person' }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            '/api/v1/get-person-by-psn': {
                get: {
                    summary: 'Search persons by PSN',
                    parameters: [
                        {
                            name: 'psn',
                            in: 'query',
                            required: true,
                            schema: { type: 'string' }
                        }
                    ],
                    responses: {
                        200: {
                            description: 'Matched persons',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: { $ref: '#/components/schemas/Person' }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            '/api/v1/addresses': {
                get: {
                    summary: 'List all addresses',
                    responses: {
                        200: {
                            description: 'A list of addresses',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: { $ref: '#/components/schemas/Address' }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        components: {
            schemas: {
                Person: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        psn: { type: 'string' },
                        ssn: { type: 'string' },
                        isDead: { type: 'boolean' },
                        death_date: { type: 'string', format: 'date-time' },
                        first_name: { type: 'string' },
                        last_name: { type: 'string' },
                        patronymic_name: { type: 'string' },
                        birth_date: { type: 'string', format: 'date-time' },
                        genus: { type: 'string' },
                        address: { $ref: '#/components/schemas/Address' },
                        documents: {
                            type: 'array',
                            items: { $ref: '#/components/schemas/Document' }
                        }
                    }
                },
                Address: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        region: { type: 'string' },
                        street: { type: 'string' },
                        building: { type: 'string' },
                        apartment: { type: 'string' },
                        community: { type: 'string' },
                        postal_Index: { type: 'string' }
                    }
                },
                Document: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        document_type: { type: 'string' },
                        document_number: { type: 'string' },
                        document_status: { type: 'string' },
                        document_department: { type: 'string' }
                    }
                }
            }
        }
    }

    return openapi
}
