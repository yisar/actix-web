(function() {var implementors = {};
implementors["actix_web"] = [{"text":"impl <a class=\"trait\" href=\"https://docs.rs/futures-core/0.3.0/futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"actix_web/web/struct.Payload.html\" title=\"struct actix_web::web::Payload\">Payload</a>","synthetic":false,"types":["actix_web::types::payload::Payload"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/futures-core/0.3.0/futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"actix_web/web/struct.Readlines.html\" title=\"struct actix_web::web::Readlines\">Readlines</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"actix_web/trait.HttpMessage.html\" title=\"trait actix_web::HttpMessage\">HttpMessage</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"actix_web/trait.HttpMessage.html#associatedtype.Stream\" title=\"type actix_web::HttpMessage::Stream\">Stream</a>: <a class=\"trait\" href=\"https://docs.rs/futures-core/0.3.0/futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"actix_web/web/struct.Bytes.html\" title=\"struct actix_web::web::Bytes\">Bytes</a>, <a class=\"enum\" href=\"actix_web/client/enum.PayloadError.html\" title=\"enum actix_web::client::PayloadError\">PayloadError</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix_web::types::readlines::Readlines"]}];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()