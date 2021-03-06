<div class="roles index">
    <h2><?php echo $title_for_layout; ?></h2>

    <div class="actions">
        <ul>
            <li><?php echo $this->Html->link(__('New Role'), array('action'=>'add')); ?></li>
        </ul>
    </div>

    <table cellpadding="0" cellspacing="0">
    <?php
        $tableHeaders =  $this->Html->tableHeaders(array(
            $this->Paginator->sort('id'),
            $this->Paginator->sort('title'),
            $this->Paginator->sort('alias'),
            __('Actions'),
        ));
        echo $tableHeaders;

        $rows = array();
        foreach ($roles AS $role) {
            $actions  = $this->Html->link(__('Edit'), array('controller' => 'acl_extras_roles', 'action' => 'edit', $role['Role']['id']));
            $actions .= ' ' . $this->Layout->adminRowActions($role['Role']['id']);
            $actions .= ' ' . $this->Html->link(__('Delete'), array(
                'plugin' => false,
                'controller' => 'roles',
                'action' => 'delete',
                $role['Role']['id'],
                'token' => $this->params['_Token']['key'],
            ), null, __('Are you sure?'));

            $rows[] = array(
                $role['Role']['id'],
                $role['Role']['title'],
                $role['Role']['alias'],
                $actions,
            );
        }

        echo $this->Html->tableCells($rows);
        echo $tableHeaders;
    ?>
    </table>
</div>

<div class="paging"><?php echo $this->Paginator->numbers(); ?></div>
<div class="counter"><?php echo $this->Paginator->counter(array('format' => __('Page %page% of %pages%, showing %current% records out of %count% total, starting on record %start%, ending on %end%'))); ?></div>
