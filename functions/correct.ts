/**
 * This function responds correctly with status 403 locally and when deployed.
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

export const onRequest: PagesFunction[] = [handler]
