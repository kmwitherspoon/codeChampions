package com.codechampions.services;

import com.codechampions.entities.Message;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by Jack on 12/9/15.
 */
public interface MessageRepository extends CrudRepository<Message, Integer> {
    List<Message> findAllByReplyId(int replyId);
}
