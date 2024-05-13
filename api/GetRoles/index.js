module.exports = async function (context, req) {
    const user = req.body || {};
    const roles = [];
    roles.push('customrole');

    context.res.json({
        roles
    });
}
