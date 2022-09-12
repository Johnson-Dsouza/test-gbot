/**
 * Making a request to fetch user details
 * to submit the response in the channel selected
 * as user
 */

type UserDetailArgs = {
  client: { users: { profile: { get: Function } }; token: string };
  body: { user: { id: string } };
};

const userDetails = async ({ client, body }: UserDetailArgs) => {
  const data = client.users.profile
    .get({ token: client.token, user: body.user.id })
    .then(
      async (data: { profile: { image_192: string; diplay_name: string } }) =>
        await data
    );

  return data;
};

module.exports = userDetails;
