import sentryPlugin from '@cloudflare/pages-plugin-sentry'

const sentry = sentryPlugin({})

/**
 * This function responds correctly with status 403 when run locally,
 * but always responds with 200 when deployed to CF.
 * Compare the x-response-status header with the actual HTTP status.
 * 
 * Removing the Sentry middleware "fixes" it.
 * The same happens with the honeycomb plugin.
 */
const handler: PagesFunction = async (context) => {
  const status = 403
  const response = new Response(JSON.stringify({ status }), {
    status,
    headers: new Headers({
      'content-type': 'application/json',
      'x-response-status': status.toString(),
    }),
  })

  return response
}

export const onRequest: PagesFunction[] = [sentry, handler]
