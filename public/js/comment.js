async function commentFormHandler(event) {
    event.preventDefault();

    const commentText = document.querySelector('input[name="comment-body"]').value.trim();

    const postId = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (commentText) { //invoke post route for adding a comment, only if there's data to act on.
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id: postId,
                comment_text: commentText
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();

        } else {
            alert(response.statusText);
            document.querySelector('#comment-form').style.display = "block";
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);